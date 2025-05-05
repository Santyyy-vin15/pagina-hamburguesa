let totalCompras = 0;

// Mostrar mensaje temporal al comprar
function comprarProducto(nombre) {
    totalCompras++;
    alert(`¡Gracias por comprar una ${nombre}!\nTotal de compras: ${totalCompras}`);
}

// Cambiar fondo aleatoriamente
function cambiarFondo() {
    const colores = ['#ffcccb', '#ccffcc', '#ccccff', '#fff3cd', '#d4edda', '#d1ecf'];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}

// Asignar eventos al cargar
window.onload = function () {
    const botones = document.querySelectorAll(".producto button");
    const titulos = document.querySelectorAll(".producto h2");

    botones.forEach((boton, i) => {
        const nombreProducto = titulos[i].innerText;
        boton.addEventListener("click", () => comprarProducto(nombreProducto));
    });

    // Botón de cambio de fondo
    const btnFondo = document.createElement("button");
    btnFondo.textContent = "🎨 Cambiar Fondo";
    btnFondo.style.position = "fixed";
    btnFondo.style.bottom = "20px";
    btnFondo.style.right = "20px";
    btnFondo.style.padding = "10px";
    btnFondo.style.borderRadius = "20px";
    btnFondo.style.backgroundColor = "#333";
    btnFondo.style.color = "white";
    btnFondo.style.cursor = "pointer";
    btnFondo.onclick = cambiarFondo;
    document.body.appendChild(btnFondo);
};