document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    }

    // Toggle theme
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            toggleButton.textContent = isDark ? '☀️' : '🌙';
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
