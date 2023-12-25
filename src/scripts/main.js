// Import functions
import modal from "./modal.js";         // Modal
import theme from "./theme.js";         // Theme
import encrypt from "./encrypt.js";     // Encrypt
import copy from "./copy.js";           // Copy

// Get the references from HTML document
const modalOpen = document.querySelector("[data-modal]");                // Modal
const modalClose = document.querySelector("[data-modal-close]");    // Modal close
const themeBtn = document.querySelector("[data-theme-btn]");        // Theme
const frm = document.querySelector("form");                         // Form
const msgIn = document.querySelector("[data-msg-in]");              // Msg input
const msgOut = document.querySelector("[data-msg-out]");            // Msg out
const copyBtn = document.querySelector("[data-copy]");              // Copy

// Call functions
modal(modalOpen, modalClose)    // Modal
theme(themeBtn);                // Theme
encrypt(frm, msgIn, msgOut);    // Encrypt
copy(copyBtn, msgOut);          // Copy