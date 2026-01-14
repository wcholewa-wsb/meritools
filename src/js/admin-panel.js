import Product from "./product.js";
import {requireAdmin} from "./auth-guard.js";
import {initAuthButton} from "./shared.js";
import {fetchUsers, getProducts, saveProduct} from "./repository.js";
import {showError} from "./toast.js";

const PLACEHOLDER_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2250%22%20height%3D%2250%22%20viewBox%3D%220%200%2050%2050%22%3E%3Crect%20width%3D%2250%22%20height%3D%2250%22%20fill%3D%22%23f0f0f0%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2210%22%20fill%3D%22%23999%22%3EBrak%3C%2Ftext%3E%3C%2Fsvg%3E";
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");
let currentImageBase64 = null;
const productForm = document.querySelector(".product-form");
const productsTableBody = document.querySelector(".products-table tbody");

const usersTableBody = document.querySelector(".users-table tbody");

let products = [];
let users = [];

init().then();

async function init() {
    requireAdmin();
    initAuthButton();
    products = await getProducts();
    users = await fetchUsers();
    renderProducts();
    renderUsers();
    addListenerToSubmitButton();
    addListenerToImageInput();
    addListenerToDeleteButton();
}

function renderProducts() {
    if (!productsTableBody) return;
    productsTableBody.innerHTML = "";


    products.forEach(product => {
        const tr = document.createElement("tr");

        const imgSrc = product.image || PLACEHOLDER_IMG;

        tr.innerHTML = `
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="${imgSrc}" alt="${product.name}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 4px; border: 1px solid #eee;">
                    <span>${product.name}</span>
                </div>
            </td>
            <td>${product.description || "-"}</td>
            <td>
                <span class="status ${product.inStock ? "active" : "inactive"}">
                    ${product.inStock ? "Aktywny" : "Nieaktywny"}
                </span>
            </td>
            <td>${product.price.toFixed(2)} zł</td>
            <td class="actions">
                <button class="icon delete" data-id="${product.id}">🗑️</button>
            </td>
        `;
        productsTableBody.appendChild(tr);
    });
}

function renderUsers() {
    if (!usersTableBody) return;
    usersTableBody.innerHTML = "";

    users.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.email}</td>
            <td>${user.login}</td>
            <td>${user.role || "USER"}</td>
        `;
        usersTableBody.appendChild(tr);
    });
}

function addListenerToSubmitButton() {
    productForm.addEventListener("submit", async e => {
        e.preventDefault();

        const name = productForm.name.value.trim();
        const description = productForm.description.value.trim();
        const price = parseFloat(productForm.price.value);

        if (!name || isNaN(price)) return;

        const product = new Product({
            name,
            description,
            price,
            inStock: true,
            image: currentImageBase64
        });

        try {
            await saveProduct(product);
            products = await getProducts();
            renderProducts();

            productForm.reset();
            currentImageBase64 = null;
            imagePreview.innerHTML = "";
        } catch (error) {
            showError("Błąd zapisu. Prawdopodobnie zdjęcie jest za duże dla localStorage.")
        }
    });
}

function addListenerToImageInput() {
    imageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                currentImageBase64 = reader.result;
                imagePreview.innerHTML = `<img src="${currentImageBase64}" style="max-width: 100%; max-height: 100%;">`;
            };
            reader.readAsDataURL(file);
        } else {
            currentImageBase64 = null;
            imagePreview.innerHTML = "";
        }
    });
}

function addListenerToDeleteButton() {
    productsTableBody.addEventListener("click", async e => {
        const btn = e.target.closest(".delete");
        if (!btn) return;

        const id = btn.dataset.id;

        products = products.filter(p => String(p.id) !== String(id));
        localStorage.setItem("products", JSON.stringify(products));

        products = await getProducts();
        renderProducts();
    });
}