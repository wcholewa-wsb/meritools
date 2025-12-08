let toast;
const STORAGE_KEY = "pendingToast";

function showToast(message, type = "success", duration = 3000) {
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, duration);
}

export function showSuccess(message) {
    showToast(message, "success");
}

export function showWarning(message) {
    showToast(message, "warning");
}

export function showError(message) {
    showToast(message, "error");
}

export function putSuccess(msg, duration = 3000) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({msg, type: "success", duration}));
}

export function putWarning(msg, duration = 3000) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({msg, type: "warning", duration}));
}

export function putError(msg, duration = 3000) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({msg, type: "error", duration}));
}

export function flushToast() {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
        const {msg, type, duration} = JSON.parse(stored);
        showToast(msg, type, duration);
        sessionStorage.removeItem(STORAGE_KEY);
    }
}
