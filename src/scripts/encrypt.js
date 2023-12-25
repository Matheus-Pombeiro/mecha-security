// Encrypt the message
const encrypt = (frm, msgIn, msgOut) => {

    window.addEventListener("load", () => {     // Listen the page's loading

        const encryptedMsg = localStorage.getItem("encryptedMsg");  // Get the encrypted message
        msgOut.innerHTML = encryptedMsg;                            // Do the output message

    });

    frm.addEventListener("submit", (e) => {

        e.preventDefault();     // Prevents the form automatic behaviour

        const letters = [];     // Declare a local array

        const msg = msgIn.value.toLowerCase();        // Get the message

        for (const letter of msg) {     // Walks the message letter by letter
            letters.unshift(letter);    // Add each letter into the array in last first position
        }

        const encryptedMsg = letters.join("");                  // Get the encrypted message
        msgOut.innerHTML = encryptedMsg;                        // Do the output message
        localStorage.setItem("encryptedMsg", encryptedMsg);     // Save the encrypted message

    });

};

export default encrypt;     // Export the function who encrypts the message