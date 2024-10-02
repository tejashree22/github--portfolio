
  document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL path
    const path = window.location.pathname.split('/').pop();

    // Find all sidebar links
    const links = document.querySelectorAll('#sidebar a');

    // Loop through links to find the current page link and add 'active-link' class
    links.forEach(link => {
      if (link.getAttribute('href') === path) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link'); // Optional: remove class from other links
      }
    });
  });

