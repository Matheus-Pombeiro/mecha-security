// Change the theme
const theme = (themeBtn) => {

    themeBtn.addEventListener("click", () => {     // Listen the click on the theme button

        // Change the theme and the img and save the user's preferences
        document.documentElement.classList.toggle("dark"); 
        document.documentElement.classList.contains("dark") ? themeBtn.src = "./assets/moon.png" : themeBtn.src = "./assets/sun.png";
        document.documentElement.classList.contains("dark") ? localStorage.setItem("theme", "dark") : localStorage.setItem("theme", "light");

    });

    window.addEventListener("load", () => {     // Listen the page loading

        const userPrefenrence = localStorage.getItem("theme");  // Get the user's preferences from localStorage

        // Verify the user's preferences and change the theme
        if (userPrefenrence == "dark") {
            document.documentElement.classList.add("dark");
            themeBtn.src = "./assets/moon.png";
        }

    });

};

export default theme;   // Export the theme changing function