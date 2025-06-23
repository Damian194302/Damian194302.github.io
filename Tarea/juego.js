// Configuración base con URL absoluta para GitHub Pages
const BASE_URL = 'https://damian194302.github.io/Tarea/';

let Personaje = [
    { nombre: "Invencible", archivo: "Invencible.png" },
    { nombre: "Batman que ríe", archivo: "Batman-que-rie.png" },
    { nombre: "Naruto", archivo: "Naruto.png" },
    { nombre: "Darth Vader", archivo: "Darth-vader.png" }, 
    { nombre: "Goku Black", archivo: "Goku-black.png" },
    { nombre: "Jon", archivo: "Jon.png" },
    { nombre: "Daemon", archivo: "Daemon.png" },
    { nombre: "Arthur", archivo: "arthur.png" }
];

let Correcta = [0, 2, 0, 2, 2, 2, 0, 1]; 
let opciones = [
    ["Invencible", "Superman", "Red Hood"],
    ["Robin", "Joker", "Batman que ríe"],
    ["Naruto", "Darth Vader", "Kaneki"],
    ["Samas", "Jiren", "Darth Vader"],
    ["Goku", "Vegeta", "Goku Black"],
    ["Rob Stark", "Robin Arryn", "Jon Snow"],
    ["Daemon Targaryen", "Ned Stark", "Jaime Lannister"],
    ["Aegon Targaryen", "Arthur Dayne", "Jaime Lannister"]
];

// Precarga de imágenes con manejo mejorado de errores
function precargarImagenes() {
    // Precargar imágenes de personajes
    Personaje.forEach(personaje => {
        const img = new Image();
        img.src = `${BASE_URL}img/${personaje.archivo}`;
        img.onerror = () => {
            console.warn(`No se pudo precargar: ${personaje.archivo}`);
        };
    });
    
    // Precargar placeholders
    [new Image().src = `${BASE_URL}img/placeholder.png`,
     new Image().src = `${BASE_URL}img/placeholder-error.png`];
}

precargarImagenes();

let posActual = 0;
let cantidadAcertadas = 0;
let cantidadIncorrectas = 0;

function formatearNombreImagen(nombre) {
    return nombre.toLowerCase().replace(/\s+/g, '-');
}

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;
    cantidadIncorrectas = 0;
    
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPersonaje();
}

function cargarPersonaje() {
    if (posActual >= Personaje.length) {
        terminarJuego();
        return;
    }
    
    limpiarOpciones();
    const imagen = Personaje[posActual];
    const imgElement = document.getElementById("imgPersonaje");
    
    // Configurar manejador de errores primero
    imgElement.onerror = function() {
        this.src = `${BASE_URL}img/placeholder-error.png`;
        console.error(`Imagen no encontrada: ${imagen.archivo}`);
    };
    
    // Intentar cargar la imagen con URL absoluta
    imgElement.src = `${BASE_URL}img/${imagen.archivo}`;
    imgElement.alt = `Imagen de ${imagen.nombre}`;
    
    // Cargar opciones
    document.getElementById("n0").textContent = opciones[posActual][0];
    document.getElementById("n1").textContent = opciones[posActual][1];
    document.getElementById("n2").textContent = opciones[posActual][2];
}

function limpiarOpciones() {
    document.querySelectorAll('.nombre, .letra').forEach(elemento => {
        elemento.className = elemento.classList[0]; 
    });
}

function comprobarRespuesta(opElegida) {
    if (opElegida === Correcta[posActual]) {
        cantidadAcertadas++;
        document.getElementById(`n${opElegida}`).classList.add('nombreAcertada');
        document.getElementById(`l${opElegida}`).classList.add('letraAcertada');
    } else {
        cantidadIncorrectas++;
        document.getElementById(`n${opElegida}`).classList.add('nombreNoAcertada');
        document.getElementById(`l${opElegida}`).classList.add('letraNoAcertada');
        
        // Mostrar la respuesta correcta
        document.getElementById(`n${Correcta[posActual]}`).classList.add('nombreAcertada');
        document.getElementById(`l${Correcta[posActual]}`).classList.add('letraAcertada');
    }
    
    posActual++;
    setTimeout(cargarPersonaje, 1500);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").textContent = cantidadAcertadas;
    document.getElementById("numIncorrectas").textContent = cantidadIncorrectas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}