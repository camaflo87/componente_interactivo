const opciones = document.querySelectorAll(".opciones__number");
const opcBtn = document.querySelector(".opciones__btn");
let respuesta = 0;

opciones.forEach((opc) => {
  opc.addEventListener("click", () => {
    opc.classList.add("opciones__active");
    respuesta = opc.dataset.id;

    eliminarSeleccion();
  });
});

function eliminarSeleccion() {
  const newOpciones = document.querySelectorAll(".opciones__number");

  newOpciones.forEach((item) => {
    if (respuesta !== item.dataset.id) {
      item.classList.remove("opciones__active");
    }
  });
}

opcBtn.addEventListener("click", crearModal);

function crearModal() {
  if (respuesta === 0) {
    console.log("No ha seleccionado una opción.");
  } else {
    const modal = document.querySelector(".opciones__modal");
    const opc = document.getElementById("opc");

    modal.classList.toggle("opciones__show");
    opc.textContent = respuesta;

    modal.addEventListener("click", () => {
      modal.classList.remove("opciones__show");
    });
  }
}
