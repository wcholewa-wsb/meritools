import {requireAdmin} from "./auth-guard.js";
import {initAuthButton} from "./shared.js";

requireAdmin();
initAuthButton();