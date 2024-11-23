// Mostrar poema y hacer desaparecer la hoja al hacer clic en el botón
document.getElementById("showPoemButton").addEventListener("click", function() {
    const leaf = document.getElementById("leaf");
    const poem = document.getElementById("poem");

    // Animación de desaparecer la hoja
    leaf.style.animation = "leafOut 1s ease-out forwards";

    // Esperamos a que termine la animación de la hoja y luego mostramos el poema
    leaf.addEventListener("animationend", function() {
        leaf.style.display = "none"; // Hacemos desaparecer la hoja
        poem.classList.remove("hidden"); // Mostramos el poema
    });
});
