// Select elements
const storeIcon = document.getElementById('store-icon');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('close-btn');

// Function to open the menu
function openMenu() {
    menuOverlay.classList.add('active');
}

// Function to close the menu
function closeMenu() {
    menuOverlay.classList.remove('active');
}

// Add event listeners
storeIcon.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
