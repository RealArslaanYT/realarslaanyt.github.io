const header = document.querySelector('.header');
const menu = document.querySelector('.hamburger-menu');

function updateMenuPosition() {
    const headerHeight = header.offsetHeight;

    menu.style.top = `${headerHeight}px`;
}

window.addEventListener('resize', updateMenuPosition);


document.addEventListener("DOMContentLoaded", () => {
    // Add scripts required for liquid glass etc here
    const hamburgerMenuToggle = document.getElementById("hamburger-menu-toggle");
    hamburgerMenuToggle.onclick = () => {
        menu.classList.toggle('active');
    }

    updateMenuPosition();
});