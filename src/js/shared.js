import {isLogged, logout} from "./auth-service.js";
import {putSuccess} from "./toast.js";

export function initAuthButton() {
    const container = document.getElementById("auth-container");

    if (isLogged()) {
        container.innerHTML = logoutHtml();
        document.getElementById("logout-btn").addEventListener("click", () => {
            logout();
            putSuccess("Pomyślnie wylogowano")
            window.location.href = "login.html";
        });
    } else container.innerHTML = loginHtml();
}

function logoutHtml() {
    return `
        <button id="logout-btn" class="logout-btn">
            Wyloguj
        </button>`;
}

function loginHtml() {
    return `
         <a href="login.html" class="login-link">
            <img src="images/user.png" class="user-icon" alt="Login">
            <span class="login-text">Login</span>
        </a>`;
}