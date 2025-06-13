let nombreInput = document.querySelector("#nombre");
let nombreTexto = document.querySelector("#nombreCurriculum");
let generarCurriculumButton = document.querySelector("#generarCurriculum");

// Agrega aquí tus variables para guardar en variables las etiquetas de edad y habilidad del currículum, tanto texto como input

let edadInput = document.querySelector("#edad");
let edadTexto = document.querySelector("#edadCurriculum");

let habilidadInput = document.querySelector("#habilidad");
let habilidadTexto = document.querySelector("#habilidadCurriculum");

function actualizarCurriculum() {
  let nombre = nombreInput.value;
  nombreTexto.textContent = nombre;

    // Agrega aquí el código para actualizar la edad y la habilidad del usuario en el currículum
  let edad = edadInput.value;
  edadTexto.textContent = edad;

  let habilidad = habilidadInput.value;
  habilidadTexto.textContent = habilidad

}


// Escuchar clic en el botón para generar el currículum, no cambiar esta línea
generarCurriculumButton.addEventListener("click", actualizarCurriculum);