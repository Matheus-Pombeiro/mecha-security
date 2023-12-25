// Encrypt the message
const encrypt = (frm, msgIn, msgOut) => {

    frm.addEventListener("submit", (e) => {

        e.preventDefault();     // Prevents the form automatic behaviour

        const letters = [];     // Declare a local array

        const msg = msgIn.value.toLowerCase();        // Get the message

        for (const letter of msg) {     // Walks the message letter by letter
            letters.unshift(letter);    // Add each letter into the array in last first position
        }

        msgOut.innerHTML = letters.join("");    // Do the output message

    });

};

export default encrypt;     // Export the function who encrypts the message