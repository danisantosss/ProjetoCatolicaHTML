function hideMenuOnResize() {
    var menu = document.querySelector('.menu');
    var windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        menu.style.display = 'none';
    } else {
        menu.style.display = '';
    }
}

window.addEventListener('resize', hideMenuOnResize);

function toggleMenu() {
    var menu = document.querySelector('.menu');
    
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
