
// The site's DEFAULT look is already the dark theme, so this button's
// job is to switch TO a light theme — it toggles ".light-mode" on
// <body> (matching the CSS) and updates the icon (moon = "switch to
// light", sun = "switch back to dark") and remembers the choice.
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

function applyTheme(isLight) {
    document.body.classList.toggle('light-mode', isLight);
    themeIcon.classList.toggle('fa-moon', !isLight);
    themeIcon.classList.toggle('fa-sun', isLight);
}
 
function toggleTheme() {
    const isLight = !document.body.classList.contains('light-mode');
    applyTheme(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
 
// Restore the saved preference on load
applyTheme(localStorage.getItem('theme') === 'light');





