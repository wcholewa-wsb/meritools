import {isAdmin, isLogged} from "./auth-service.js";
import {putError} from "./toast.js";

function redirect() {
    putError("Nie posiadasz uprawnień do tej strony");
    window.location.href = "home.html";
}

export function requireAdmin() {
    if (!isAdmin()) redirect();
}

export function requireUser() {
    if (!isLogged()) redirect();
}
