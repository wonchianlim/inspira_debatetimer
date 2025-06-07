// Theme toggle functionality
document.getElementById('btn-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  
  // Save theme preference
  const isDarkMode = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update button icon
  this.textContent = isDarkMode ? '🌙' : '☀️';
});

// Fullscreen toggle functionality
document.getElementById('btn-full').addEventListener('click', function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
});

// Load saved theme preference
document.addEventListener('DOMContentLoaded', function() {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true';
  if (savedDarkMode) {
    document.body.classList.add('dark');
    document.getElementById('btn-theme').textContent = '🌙';
  }
});