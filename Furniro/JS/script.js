function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.menu-icon');

    mobileNav.classList.toggle('open');
    menuIcon.classList.toggle('close');
}