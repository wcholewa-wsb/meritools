import User from "./user.js";
import Product from "./product.js";
import {putSuccess, showError} from "./toast.js";

const USERS_KEY = "users";
const PRODUCTS_KEY = "products";

export async function fetchUsers() {
    let users = JSON.parse(localStorage.getItem(USERS_KEY) || "null");

    if (!users) {
        const response = await fetch("./db/users.json");
        users = response.ok ? await response.json() : [];
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }

    return users.map(u => new User(u));
}

export async function addUser(email, password) {
    if (!email.includes("@")) {
        showError("Niepoprawny email");
        return;
    }

    const users = await fetchUsers();

    const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) {
        showError("Użytkownik o tym emailu już istnieje")
    }

    const login = email.split("@")[0];
    const id = Math.floor(Math.random() * 10000000);
    const role = "USER";

    const newUser = new User({id, login, email, password, role});
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return newUser;
}

export async function getProducts() {
    let products = JSON.parse(localStorage.getItem(PRODUCTS_KEY) || "null");

    if (!products) {
        const response = await fetch("./db/products.json");
        products = response.ok ? await response.json() : [];
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    }

    return products.map(p => new Product(p));
}
