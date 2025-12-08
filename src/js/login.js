import {fetchUsers} from "./repository.js";
import {login} from "./auth-service.js";
import {flushToast, putSuccess, showError} from "./toast.js";

document.addEventListener("DOMContentLoaded", () => {
    flushToast();
});
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    const users = await fetchUsers();
    const found = users.find(u => u.email === email && u.password === password);

    if (found) {
        login(found);
        putSuccess("Zalogowano pomyślnie");
        window.location.href = "home.html";
    } else {
        showError("Błędne dane logowania");
    }
});
