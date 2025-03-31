const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check localStorage for the user's preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save the user's preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});