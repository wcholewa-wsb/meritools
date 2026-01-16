import {flushToast} from "./toast.js";
import {initAuthButton} from "./shared.js";
import {isAdmin} from "./auth-service.js";
import {getProducts} from "./repository.js";

document.addEventListener("DOMContentLoaded", () => {
    flushToast();
    loadProducts().then();
});

initAuthButton();
initAdminPanelButton();

async function loadProducts() {
    const container = document.querySelector(".product-grid");
    if (!container) return;

    try {
        const products = await getProducts();

        if (products.length === 0) {
            container.innerHTML = "<p>Brak produktów do wyświetlenia.</p>";
            return;
        }

        container.innerHTML = products.map(product => {
            const imgSrc = product.image ? product.image : 'images/placeholder.png';

            return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${imgSrc}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${Number(product.price).toFixed(2)} zł</p>
                    <button class="add-btn" data-id="${product.id}">Dodaj do koszyka</button>
                </div>
            </div>
            `;
        }).join("");

    } catch (error) {
        console.error("Błąd ładowania produktów:", error);
        container.innerHTML = "<p>Nie udało się załadować produktów.</p>";
    }
}

function initAdminPanelButton() {
    const admin = document.getElementById("admin-container");
    if (admin && isAdmin()) admin.innerHTML = adminButtonHtml();
}

function adminButtonHtml() {
    return `
        <a href="admin-panel.html" class="admin-link">
            <span class="login-text">Panel Administratora</span>
        </a>
    `
}