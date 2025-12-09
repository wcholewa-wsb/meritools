const STORAGE_KEY = "currentUser";

export function login(user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function logout() {
    sessionStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser() {
    const user = sessionStorage.getItem(STORAGE_KEY);
    return user ? JSON.parse(user) : null;
}

export function isLogged() {
    return getCurrentUser() !== null;
}

export function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === "ADMIN";
}
