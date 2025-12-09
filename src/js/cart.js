import {requireUser} from "./auth-guard.js";
import {initAuthButton} from "./shared.js";

requireUser();
initAuthButton();
