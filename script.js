// Seleccionar las imágenes y la caja de información
const galleryItems = document.querySelectorAll('.gallery-item');
const infoBox = document.querySelector('.image-info');

// Escuchar el evento de scroll
window.addEventListener('scroll', () => {
  let currentInfo = ''; // Variable para almacenar la ficha técnica actual

  galleryItems.forEach((item) => {
    const rect = item.getBoundingClientRect(); // Obtener la posición de la imagen

    // Detectar si la imagen está en la mitad del viewport
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      const info = item.getAttribute('data-info'); // Obtener ficha técnica
      currentInfo = info; // Actualizar la ficha técnica actual
    }
  });

  // Mostrar la ficha técnica si hay información válida
  if (currentInfo) {
    // Dividir y formatear el contenido de data-info
    const formattedInfo = formatDataInfo(currentInfo);

    // Actualizar el contenido de la caja de información
    infoBox.innerHTML = formattedInfo;
    infoBox.classList.add('visible');
  } else {
    infoBox.classList.remove('visible');
  }
});

/**
 * Función para dividir data-info en líneas separadas por comas
 * La primera línea será cursiva
 */
function formatDataInfo(info) {
    // Dividir el texto por comas
    const parts = info.split('$');
  
    // Aplicar formato: la primera línea en cursiva
    return parts
      .map((part, index) => {
        if (index === 0) {
          // Primera línea: clase especial para cursiva
          return `<p class="info-first-line">${part.trim()}</p>`;
        }
        // Otras líneas: texto normal
        return `<p>${part.trim()}</p>`;
      })
      .join('');
  }
  
