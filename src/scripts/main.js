// Import functions
import theme from "./theme.js";         // Theme
import encrypt from "./encrypt.js";     // Encrypt

// Get the references from HTML document
const themeBtn = document.querySelector("[data-theme-btn]");    // Theme
const frm = document.querySelector("form");                     // Form
const msgIn = document.querySelector("[data-msg-in]");          // Msg input
const msgOut = document.querySelector("[data-msg-out]");        // Msg out

// Call functions
theme(themeBtn);        // Theme
encrypt(frm, msgIn, msgOut);    // Encrypt