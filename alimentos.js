let totalCompras = 0;
let contadorDiv = null;

function comprarProducto(nombre, boton) {
    totalCompras++;

    const productoDiv = boton.closest(".producto");
    const precioTexto = productoDiv.querySelector("p").innerText;
    const precio = precioTexto.replace("Precio: ", "");

    // Mostrar alerta con nombre y precio
    alert(`¡Gracias por comprar una ${nombre}!  \n ¡el costo seria: ${precio}!`);

    // Actualizar contador visual
    if (contadorDiv) {
        contadorDiv.innerText = `🛒 Compras: ${totalCompras}`;
    }
}

function cambiarFondo() {
    const colores = ['#E5A460', '#E3BA29', '#E36829', '#E3A329', '#E34829', '#E38929'];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}

window.onload = function () {
    const botones = document.querySelectorAll(".producto button");
    const titulos = document.querySelectorAll(".producto h2");

    botones.forEach((boton, i) => {
        const nombreProducto = titulos[i].innerText;
        boton.addEventListener("click", () => comprarProducto(nombreProducto, boton));
    });

    // Botón de fondo
    const btnFondo = document.createElement("button");
    btnFondo.textContent = "🎨";
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

    // Contador de compras flotante
    contadorDiv = document.createElement("div");
    contadorDiv.innerText = `🛒 Compras: 0`;
    contadorDiv.style.position = "fixed";
    contadorDiv.style.top = "20px";
    contadorDiv.style.right = "20px";
    contadorDiv.style.padding = "10px 15px";
    contadorDiv.style.borderRadius = "100px";
    contadorDiv.style.backgroundColor = "white";
    contadorDiv.style.translate = 
    contadorDiv.style.color = "#272EE5";/* Camnbia el color de la letra */
    contadorDiv.style.fontWeight = "bold";
    contadorDiv.style.boxShadow = "0 0 10px rgba(218, 13, 13, 0.2)";
    document.body.appendChild(contadorDiv);
};
