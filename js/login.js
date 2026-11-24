document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    loginForm.addEventListener('submit', (event) => {
        // Limpiar errores previos
        emailError.textContent = '';

        // Validar si el campo está vacío o no cumple el formato
        if (!emailInput.value.includes('@')) {
            event.preventDefault(); // Detiene el envío del formulario
            emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
            emailError.style.color = 'red'; // Asegura que sea visible
        }
    });
});
