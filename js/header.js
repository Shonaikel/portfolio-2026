document.addEventListener("DOMContentLoaded", () => {
  // Determinar la ruta correcta del header basándose en la ubicación del documento
  const currentPath = window.location.pathname;
  const currentHref = window.location.href;
  
  // Detectar si estamos en la carpeta src/
  let headerPath = 'src/header.html';
  if (currentPath.includes('/src/') || currentHref.includes('/src/')) {
    headerPath = 'header.html';
  }
  
  console.log('Intentando cargar header desde:', headerPath);
  
  fetch(headerPath)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then(data => {
      const header = document.getElementById("header");
      if (!header) {
        console.error("No se encontró el elemento con id 'header'");
        return;
      }
      header.innerHTML = data;
      console.log('Header cargado correctamente');

     
      // Dropdown y menú móvil
      const dropdownToggle = header.querySelector('.dropdown-toggle');
      const toggleBtn = header.querySelector('.toggle');
      const nav = header.querySelector('.nav');

      // Dropdown click
      if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
          e.preventDefault();
          dropdownToggle.nextElementSibling.classList.toggle('show');
        });
      }

      // Toggle mobile menu
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
      
      // Cerrar dropdown al hacer click fuera
      window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropdown-toggle')) {
          const dropdown = header.querySelector('.dropdown-menu');
          if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
          }
        }
      });
      
    })
    .catch(err => {
      console.error("Error cargando header:", err);
      console.error("Ruta intentada:", headerPath);
      console.error("Pathname actual:", currentPath);
      console.error("Href actual:", currentHref);
      
      // Intentar con la ruta alternativa si falla
      const altPath = headerPath === 'header.html' ? 'src/header.html' : 'header.html';
      console.log('Intentando ruta alternativa:', altPath);
      
      return fetch(altPath)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.text();
        })
        .then(data => {
          const header = document.getElementById("header");
          if (header) {
            header.innerHTML = data;
            console.log('Header cargado desde ruta alternativa');
            // Reinicializar eventos
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
          }
        })
        .catch(altErr => {
          console.error("Error también con ruta alternativa:", altErr);
        });
    });
});