


const parrafos = document.querySelectorAll(".text");

parrafos.forEach(elemento => {
  elemento.addEventListener("mouseover", function aumentarTamaño() {
    this.style.transform = "scale(1.05)";
  });
  
  elemento.addEventListener("mouseout", function regresarTamaño() {
    this.style.transform = "scale(1)";
  });
});




const contenedor = document.getElementById('col1');
const boton = document.getElementById('mi-boton');

  boton.addEventListener('click', function() {
  const colores = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', "#0a9bdf"];
  const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  contenedor.style.backgroundColor = nuevoColor;
});
