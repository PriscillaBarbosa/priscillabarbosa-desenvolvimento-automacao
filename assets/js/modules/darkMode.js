export function inicializarDarkMode() {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const rootElement = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');

    function applyTheme(theme) {
        rootElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        themeIcon.classList.remove('fa-moon', 'fa-sun');

        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    applyTheme(localStorage.getItem('theme') || 'light');

    // Adiciona o evento de clique ao botão.
    toggleButton.addEventListener('click', () => {
        const newTheme = rootElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
};