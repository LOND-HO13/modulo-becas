document.addEventListener("DOMContentLoaded", () => {
    // Contenedor donde se insertará el header
    const headerContainer = document.getElementById("header-container");

    // HTML del header
    const headerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #990000;">
            <div class="container-fluid">
                <!-- Logo -->
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src="../img/logo_univalle_light.svg" alt="Logo" width="50" height="50" class="d-inline-block align-top">
                    <span class="ms-2">Universidad del Valle</span>
                </a>
                <!-- Botón colapsable -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <!-- Enlaces del menú -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Gestión usuarios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Informes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Menú del día</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Reservas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Externos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../html/ajustesadmin.html">Ajustes</a>
                        </li>
                    </ul>
                    <!-- Botón de cerrar sesión -->
                    <button class="btn btn-outline-light ms-3" id="logoutButton">
                        Cerrar sesión <i class="fa fa-sign-out-alt"></i>
                    </button>
                </div>
            </div>
        </nav>
    `;

    // Insertar el header en el contenedor
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }

    // Agregar funcionalidad al botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            const confirmation = confirm("¿Estás seguro de que deseas cerrar sesión?");
            if (confirmation) {
                window.location.href = "../html/login.html"; // Redirigir a la página de inicio de sesión
            }
        });
    }
});
