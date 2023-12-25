// Settings to copy the encrypted message
const copy = (copyBtn, msgOut) => {

    copyBtn.addEventListener("click", () => {

        navigator.clipboard.writeText(msgOut.innerHTML);    // Transfer the output content to the user's device transference area
        copyBtn.src = "./assets/check.png";                 // Change the button img

        // After some time, returns the original img to the button
        setTimeout(() => {
            copyBtn.src = "./assets/copy.png"
        }, 1000);

    });;

};

export default copy;    // Export the function who copy the encrypted message