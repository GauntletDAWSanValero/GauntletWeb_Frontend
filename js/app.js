document.addEventListener('DOMContentLoaded', () => {
    const enlacesNav = document.querySelectorAll('.nav-menu a.nav-btn');
    const subpaginas = document.querySelectorAll('.subpage');

    function actualizarPantallaSegunRuta() {
        // 1. Obtener la ruta limpia eliminando el '#' y las barras '/'
        let rutaActual = window.location.hash.replace('#', '').replace(/\//g, '').trim();

        // 2. Si la URL no tiene ruta (está vacía), forzamos que sea 'lista'
        if (!rutaActual) {
            rutaActual = 'lista';
        }

        // 3. Recorrer los enlaces y activar solo el que coincide
        enlacesNav.forEach(enlace => {
            const enlacePath = enlace.getAttribute('data-path');
            if (enlacePath === rutaActual) {
                enlace.classList.add('active');
            } else {
                enlace.classList.remove('active');
            }
        });

        // 4. Recorrer las secciones y mostrar únicamente la correcta
        subpaginas.forEach(pagina => {
            if (pagina.id === `view-${rutaActual}`) {
                pagina.classList.add('active'); // Aplica display: block;
            } else {
                pagina.classList.remove('active'); // Aplica display: none;
            }
        });
    }

    // Escuchar los cambios de ruta en la barra de direcciones
    window.addEventListener('hashchange', actualizarPantallaSegunRuta);

    // Comprobar la ruta actual al cargar la página por primera vez
    actualizarPantallaSegunRuta();
});
