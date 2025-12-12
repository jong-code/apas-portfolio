// Theme Toggle Functionality
class ThemeToggle {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.html = document.documentElement;
    this.init();
  }

  init() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      this.setDarkMode();
    } else {
      this.setLightMode();
    }

    // Add event listener
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          this.setDarkMode();
        } else {
          this.setLightMode();
        }
      }
    });
  }

  toggleTheme() {
    if (this.html.classList.contains('dark-mode')) {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  setDarkMode() {
    this.html.classList.add('dark-mode');
    this.themeToggle.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    this.updateCSSVariables(true);
  }

  setLightMode() {
    this.html.classList.remove('dark-mode');
    this.themeToggle.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    this.updateCSSVariables(false);
  }

  updateCSSVariables(isDark) {
    const root = document.documentElement;
    
    if (isDark) {
      root.style.setProperty('--bg-primary', '#0F172A');
      root.style.setProperty('--bg-secondary', '#1E293B');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.7)');
      root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--text-primary', '#1A5092');
      root.style.setProperty('--text-secondary', '#64748b');
      root.style.setProperty('--card-bg', 'rgba(26, 80, 146, 0.05)');
      root.style.setProperty('--border-color', 'rgba(26, 80, 146, 0.1)');
    }
  }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});
