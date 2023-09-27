const button = document.getElementById('theme-button');
var currentTheme = localStorage.getItem('theme') || 'dark';

button.addEventListener('click', () => {
    if (currentTheme == 'dark') {
        setTheme('light');
    }
    else {
        setTheme('dark');
    }
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

if (currentTheme) {
    setTheme(currentTheme);
}
else {
    setTheme('dark');
}