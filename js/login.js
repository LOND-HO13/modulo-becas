document.addEventListener("DOMContentLoaded", () => {
    // Inicializar usuarios en localStorage si no existen
    if (!localStorage.getItem("users")) {
        const initialUsers = [
            { username: "admin", password: "admin" },
            { username: "user1", password: "12345" }
        ];
        localStorage.setItem("users", JSON.stringify(initialUsers));
    }

    // Función para cambiar la contraseña
    function changePassword(username, newPassword) {
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((u) => u.username === username);

        if (user) {
            user.password = newPassword;
            localStorage.setItem("users", JSON.stringify(users)); // Guardar cambios en localStorage
            alert(`Contraseña cambiada con éxito para el usuario: ${username}`);
            window.location.href = "login.html"; // Redirigir al login
        } else {
            alert("Usuario no encontrado. No se pudo cambiar la contraseña.");
        }
    }

    // Manejar el formulario de cambio de contraseña
    const resetForm = document.getElementById("resetForm");
    if (resetForm) {
        resetForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("reset-username").value;
            const newPassword = document.getElementById("new-password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (newPassword === confirmPassword) {
                changePassword(username, newPassword);
            } else {
                alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
            }
        });
    }

    // Manejar el inicio de sesión
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const users = JSON.parse(localStorage.getItem("users"));
            const user = users.find(
                (u) => u.username === username && u.password === password
            );

            if (user) {
                alert("Inicio de sesión exitoso. Bienvenido " + username + "!");
            } else {
                alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
            }
        });
    }
});
