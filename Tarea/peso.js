// Constantes organizadas por categorías
const GRAVEDAD = {
  MERCURIO: 3.7,
  VENUS: 8.87,
  MARTE: 3.71,
  JUPITER: 24.79,
  SATURNO: 10.44,
  URANO: 8.69,
  NEPTUNO: 11.15,
  PLUTON: 0.62,
  TIERRA: 9.81
};

const DIAMETROS = {
  MERCURIO: 4878,
  VENUS: 12100,
  MARTE: 6794,
  JUPITER: 143200,
  SATURNO: 120536,
  URANO: 51118,
  NEPTUNO: 49528,
  TIERRA: 12756,
  PLUTON: 2376
};

const TAMAÑOS = {
  PLUTON: 1,
  MERCURIO: 2,
  MARTE: 3,
  VENUS: 4,
  TIERRA: 5,
  NEPTUNO: 6,
  URANO: 7,
  SATURNO: 8,
  JUPITER: 9
};

// Función de validación mejorada
function validar(valor) {
  if (isNaN(valor)) return 1;
  if (valor < 0) return 2;
  return 0;
}

// Función para obtener la gravedad de un planeta
function obtenerGravedad(planeta) {
  switch (planeta) {
    case 'mercurio': return GRAVEDAD.MERCURIO;
    case 'venus': return GRAVEDAD.VENUS;
    case 'marte': return GRAVEDAD.MARTE;
    case 'jupiter': return GRAVEDAD.JUPITER;
    case 'saturno': return GRAVEDAD.SATURNO;
    case 'urano': return GRAVEDAD.URANO;
    case 'neptuno': return GRAVEDAD.NEPTUNO;
    case 'pluton': return GRAVEDAD.PLUTON;
    default: return 0;
  }
}

// Función para obtener el diámetro de un planeta
function obtenerDiametro(planeta) {
  switch (planeta) {
    case 'mercurio': return DIAMETROS.MERCURIO;
    case 'venus': return DIAMETROS.VENUS;
    case 'marte': return DIAMETROS.MARTE;
    case 'jupiter': return DIAMETROS.JUPITER;
    case 'saturno': return DIAMETROS.SATURNO;
    case 'urano': return DIAMETROS.URANO;
    case 'neptuno': return DIAMETROS.NEPTUNO;
    case 'pluton': return DIAMETROS.PLUTON;
    default: return 0;
  }
}

// Función para obtener el tamaño de un planeta
function obtenerTamaño(planeta) {
  switch (planeta) {
    case 'mercurio': return TAMAÑOS.MERCURIO;
    case 'venus': return TAMAÑOS.VENUS;
    case 'marte': return TAMAÑOS.MARTE;
    case 'jupiter': return TAMAÑOS.JUPITER;
    case 'saturno': return TAMAÑOS.SATURNO;
    case 'urano': return TAMAÑOS.URANO;
    case 'neptuno': return TAMAÑOS.NEPTUNO;
    case 'pluton': return TAMAÑOS.PLUTON;
    default: return 0;
  }
}

// Función 1 - Calcular peso en otros planetas
document.getElementById("calcular").addEventListener("click", function(event) {
  event.preventDefault();
  
  const pesoTierra = parseFloat(document.getElementById("pesoTierra").value);
  const planetaSeleccionado = document.getElementById("planeta").value;
  const resultadoElement = document.getElementById("resultado");
  
  const validacion = validar(pesoTierra);
  
  if (validacion === 1) {
    resultadoElement.textContent = "Indique un peso en la Tierra";
    return;
  }
  
  if (validacion === 2) {
    resultadoElement.textContent = "El peso en la Tierra no debe ser negativo";
    return;
  }
  
  const gravedadPlaneta = obtenerGravedad(planetaSeleccionado);
  const pesoOtroPlaneta = ((pesoTierra / GRAVEDAD.TIERRA) * gravedadPlaneta).toFixed(2);
  
  resultadoElement.textContent = `Su peso en el planeta ${planetaSeleccionado} es de ${pesoOtroPlaneta} kg`;
});

// Función 2 - Tiempo de caída
document.getElementById("calcular-2").addEventListener("click", function(event) {
  event.preventDefault();
  
  const alturaCaida = parseFloat(document.getElementById("alturaCaida").value);
  const planetaSeleccionado = document.getElementById("planeta-2").value;
  const resultadoElement = document.getElementById("resultado-2");
  
  const validacion = validar(alturaCaida);
  
  if (validacion === 1) {
    resultadoElement.textContent = "Indique una altura de caída";
    return;
  }
  
  if (validacion === 2) {
    resultadoElement.textContent = "La altura de caída no puede ser negativa";
    return;
  }
  
  const gravedadPlaneta = obtenerGravedad(planetaSeleccionado);
  const tiempoCaida = Math.sqrt((2 * alturaCaida) / gravedadPlaneta).toFixed(2);
  
  resultadoElement.textContent = `Tiempo de objeto cayendo en ${planetaSeleccionado} es de ${tiempoCaida} segundos`;
});

// Función 3 - Comparar tamaños
document.getElementById("calcular-3").addEventListener("click", function(event) {
  event.preventDefault();
  
  const planeta1 = document.getElementById("planeta-3").value;
  const planeta2 = document.getElementById("planeta-4").value;
  const resultadoElement = document.getElementById("resultado-3");
  
  const diametro1 = obtenerDiametro(planeta1);
  const diametro2 = obtenerDiametro(planeta2);
  const comparacion = (diametro1 / diametro2).toFixed(2);
  
  resultadoElement.textContent = `${planeta1} es ${comparacion} veces más grande que ${planeta2}`;
});

// Función 4 - Planeta más grande
document.getElementById("calcular-4").addEventListener("click", function(event) {
  event.preventDefault();
  
  const planeta1 = document.getElementById("planeta-5").value;
  const planeta2 = document.getElementById("planeta-6").value;
  const resultadoElement = document.getElementById("resultado-4");
  
  if (planeta1 === planeta2) {
    resultadoElement.textContent = "Los planetas seleccionados son del mismo tamaño.";
    return;
  }
  
  const tamaño1 = obtenerTamaño(planeta1);
  const tamaño2 = obtenerTamaño(planeta2);
  const planetaMasGrande = tamaño1 > tamaño2 ? planeta1 : planeta2;
  
  resultadoElement.textContent = `El planeta ${planetaMasGrande} es más grande.`;
});