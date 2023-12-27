function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcons = document.querySelector('.hamburger-icon');

    // transition between open and close state from 'open' class
    menuLinks.classList.toggle('open');
    hamburgerIcons.classList.toggle('open');
}