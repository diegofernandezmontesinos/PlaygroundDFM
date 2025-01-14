
**dependencies to install:**
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest



**To see the watch test:**


npm test -- --watch


2. Práctica con un formulario

Crea un formulario básico con validación en tiempo real.

Requisitos del formulario:

    Campo de texto para un email.
    Botón de envío deshabilitado hasta que el email sea válido.
    Muestra un mensaje si el email no es válido.

Pruebas (escribe esto primero):

    El botón de envío está deshabilitado inicialmente.
    Al escribir un email válido, el botón se habilita.
    Si el email es inválido, se muestra un mensaje de error.