function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcons = document.querySelector('.hamburger-icon');


    const picContainer = document.querySelector(".section__pic-container");
    const textContainer = document.querySelector(".section__text");

    if (picContainer.style.transform === "" || picContainer.style.transform === "translateY(0px)") {
        // If menu is closed, open it and move avatar and text down
        picContainer.style.transform = "translateY(100px)";  // Change this value as needed
        textContainer.style.transform = "translateY(100px)";  // Change this value as needed
    } else {
        // If menu is open, close it and move avatar and text back to original position
        picContainer.style.transform = "translateY(0px)";
        textContainer.style.transform = "translateY(0px)";
    }

    // transition between open and close state from 'open' class
    menuLinks.classList.toggle('open');
    hamburgerIcons.classList.toggle('open');
}