document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    
    // Captura de inputs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Captura de contenedores de error
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    registerForm.addEventListener('submit', (event) => {
        let isValid = true;

        // 1. Limpiar todos los mensajes de error previos
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // 2. Validación del Nombre de Usuario (Mínimo 3 caracteres)
        if (usernameInput.value.trim().length < 3) {
            usernameError.textContent = 'El nombre de usuario debe tener al menos 3 caracteres.';
            isValid = false;
        }

        // 3. Validación del Correo Electrónico (Estructura básica)
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            emailError.textContent = 'Introduce un correo electrónico válido (ejemplo@dominio.com).';
            isValid = false;
        }

        // 4. Validación de la Contraseña (Mínimo 6 caracteres)
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
            isValid = false;
        }

        // 5. Validación de Coincidencia de Contraseñas
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            isValid = false;
        }

        // Si alguna validación falló, detenemos el envío del formulario
        if (!isValid) {
            event.preventDefault();
        } else {
            alert('¡Registro exitoso! Enviando datos...');
            // Aquí puedes dejar que el formulario continúe a tu backend o procesarlo con un fetch()
        }
    });
});
