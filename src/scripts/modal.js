// Setting to open and close the main modal
const modal = (modalOpen, modalClose) => {

    // Open the modal
    window.addEventListener("load", () => {
        modalOpen.showModal();
    });

    // Close the modal
    modalClose.addEventListener("click", () => {
        modalOpen.close();
    });

};

export default modal;   // Export the function who open and close the main modal