// Encrypt the message
const encrypt = (frm, msgIn, msgOut) => {

    frm.addEventListener("submit", (e) => {

        e.preventDefault();     // Prevents the form automatic behaviour

        // Declare the local arrays
        const letters = [];
        const outMsg = [];

        const msg = msgIn.value.toLowerCase();        // Get the message

        for (const letter of msg) {     // Walks the message letter by letter
            letters.push(letter);       // Add each letter into the array
        }

        do { 
            const b = Math.floor(Math.random() * letters.length);
            if (!outMsg.includes(letters[b])) {
                outMsg.push(letters[b]);
            }
        } while (outMsg.length < letters.length);

        console.log(letters);
        console.log(outMsg);

        msgOut.innerHTML = outMsg.join("");

    });

};

export default encrypt;     // Export the function who encrypts the message