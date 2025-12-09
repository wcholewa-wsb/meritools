import {flushToast} from "./toast.js";
import {initAuthButton} from "./shared.js";
import {isAdmin} from "./auth-service.js";

document.addEventListener("DOMContentLoaded", () => {
    flushToast();
});

initAuthButton();
initAdminPanelButton();

function initAdminPanelButton() {
    const admin = document.getElementById("admin-container");
    if (isAdmin()) admin.innerHTML = adminButtonHtml();
}

function adminButtonHtml() {
    return `
        <a href="admin-panel.html" class="admin-link">
            <span class="login-text">Panel Administratora</span>
        </a>
    `
}