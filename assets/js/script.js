document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu');
    const menuDropdown = document.getElementById('menuDropdown');

    menuButton.addEventListener('click', function() {
        menuDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove('show');
        }
    });
});