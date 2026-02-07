document.addEventListener("DOMContentLoaded", () => {
  const headerPath = './header.html';

  fetch(headerPath)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.text();
    })
    .then(data => {
      const header = document.getElementById("header");
      if (!header) {
        console.error("No se encontró el elemento con id 'header'");
        return;
      }
      header.innerHTML = data;

      const dropdownToggle = header.querySelector('.dropdown-toggle');
      const toggleBtn = header.querySelector('.toggle');
      const nav = header.querySelector('.nav');

      if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
          e.preventDefault();
          dropdownToggle.nextElementSibling.classList.toggle('show');
        });
      }

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }

      window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown-toggle')) {
          const dropdown = header.querySelector('.dropdown-menu');
          if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        }
      });
    })
    .catch(err => console.error("Error cargando header:", err));
});