// Constantes con la gravedad de los planetas
const GRAVEDAD_MERCURIO = 3.7;
const GRAVEDAD_VENUS = 8.87;
const GRAVEDAD_MARTE = 3.71;
const GRAVEDAD_JUPITER = 24.79;
const GRAVEDAD_SATURNO = 10.44;
const GRAVEDAD_URANO = 8.69;
const GRAVEDAD_NEPTUNO = 11.15;
const GRAVEDAD_PLUTON = 0.62;

// Constante con la gravedad de la Tierra para calculo de peso en otros planetas
const GRAVEDAD_TIERRA = 9.81;

/**
 * FORMULA PARA CALCULAR EL PESO EN OTROS PLANETAS
 * (Peso en la Tierra / Gravedad en la Tierra) * Gravedad en el planeta
 */

// Aqui escribiras la logica para calcular el peso en el planeta seleccionado
document.getElementById("calcular").addEventListener("click", function (event) {
  event.preventDefault();

  // Input que obtiene el valor del peso en la Tierra
  const pesoTierra = parseFloat(document.getElementById("pesoTierra").value);
  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado = document.getElementById("planeta").value;
  // Elemento donde se mostrará el resultado final.
  const mensajeConElCalculoDelPeso = document.getElementById("resultado");
 // Valor del peso en otro planeta
  let pesoOtroPlaneta=0
  // Validamos que el valor introducido sea un número con una función.
//El primer if se encarga que si es un 1 significa que el campo se encuenta vacio y se le niega el acceso.
if ( validar(pesoTierra)===1)
  {
  mensajeConElCalculoDelPeso.textContent =("Indique un peso en la Tierra ")
  // el else y el segundo if se encargan que si el numero es un 2 siginifida que son numeros negativos los que se intentan calcular y se les niega el acceso.
  }
  else
  {
      if ( validar(pesoTierra)===2)
      {
      mensajeConElCalculoDelPeso.textContent =("El peso en la Tierra no debe ser negativo ")

      }
      else{
      /**
       * Escribe tu código aquí
       */
        
        // Clacular cual es el peso en el  planeta Venus.
        if (planetaSeleccionado==="venus")
         {
             pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_VENUS).toFixed(2)
         }
         //Clacular cual es el peso en el planeta Mercurio.
        if (planetaSeleccionado=== "mercurio")
        {
           pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_MERCURIO).toFixed(2)
        }
         //Calcular cual es el peso en el planeta Marte.
        if (planetaSeleccionado === "marte")
        {
            pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_MARTE).toFixed(2)
        }
         //Calcular cual es el peso en el planeta Jupiter.
        if (planetaSeleccionado === "jupiter")
        {
           pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_JUPITER).toFixed(2)
        }
        //Calcular cual es el peso en el planeta Saturno.
        if (planetaSeleccionado === "saturno")
        {
            pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_SATURNO).toFixed(2)
        }
        //Calcular cual es el peso en el planeta Urano
        if (planetaSeleccionado === "urano")
        {
            pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_URANO).toFixed(2)
        }
        //Calcular cual es el peso en el planeta Neptuno.
        if (planetaSeleccionado === "neptuno") 
        {
            pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_NEPTUNO).toFixed(2)
        }
        //Calcular cual es el peso en el planeta Neptuno.
        if (planetaSeleccionado === "pluton")
        {
            pesoOtroPlaneta = ((pesoTierra/GRAVEDAD_TIERRA)*GRAVEDAD_PLUTON).toFixed(2)
        }

      /**
       * Modificamos el texto del elemento resultado para mostrar el peso en el planeta seleccionado.
       * 
       * Ejemplo: Tu peso en mercurio es: 42.55 kg.
       */
   //El mensje se envia solo cuando el campo correspondiente tiene numeros positivos y se puede calcular con el planeta elejido.
      mensajeConElCalculoDelPeso.textContent = "Su peso en el planeta "+planetaSeleccionado+" es de "+pesoOtroPlaneta;
  }
  }
});
//FUNCION 2 ---------------------------------------------

/**
 * FORMULA PARA CALCULAR EL TIEMPO DE CAIDA EN SEGUNDOS
 * raiz2( (2 * altura de caida) / Gravedad en la Tierra ) 
 */

// Aqui escribiras la logica para calcular el peso en el planeta seleccionado
document.getElementById("calcular-2").addEventListener("click", function (event) {
  event.preventDefault();

  // Input que obtiene el valor del peso en la Tierra
  const alturaCaida = parseFloat(document.getElementById("alturaCaida").value);
  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado = document.getElementById("planeta-2").value;
  // Elemento donde se mostrará el resultado final.
  const mensajeConElCalculoDelPeso = document.getElementById("resultado-2");

  // Validamos que el valor introducido sea un número con una función.

  /**
   * Escribe tu código aquí
   */
     // Valor de timpo de caida
  let tiempoCaida=0
  // Validamos que el valor introducido sea un número con una función.
//El primer if se encarga que si es un 1 significa que el campo se encuenta vacio y se le niega el acceso.
if ( validar(alturaCaida)===1)
  {
  mensajeConElCalculoDelPeso.textContent =("Indique una altura de caida ")
  // el else y el segundo if se encargan que si el numero es un 2 siginifida que son numeros negativos los que se intentan calcular y se les niega el acceso.
  }
  else
  {
      if ( validar(alturaCaida)===2)
      {
      mensajeConElCalculoDelPeso.textContent =("la altura de caida no puede ser negativo ")

      }
      else{
      /**
       * Escribe tu código aquí
       */
        
        // Clacular cual es la caida  en el  planeta Venus.
        if (planetaSeleccionado==="venus")
         {
             tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_VENUS).toFixed(2)
         }
         //Clacular cual es la caida  en el planeta Mercurio.
        if (planetaSeleccionado=== "mercurio")
        {
           tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_MERCURIO).toFixed(2)
        }
         //Calcular cual es la caida en el planeta Marte.
        if (planetaSeleccionado === "marte")
        {
           tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_MARTE).toFixed(2)
        }
         //Calcular cual es la caida  en el planeta Jupiter.
        if (planetaSeleccionado === "jupiter")
        {
           tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_JUPITER).toFixed(2)
        }
        //Calcular cual es la caida  en el planeta Saturno.
        if (planetaSeleccionado === "saturno")
        {
        tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_SATURNO).toFixed(2)
        }
        //Calcular cual es la caida en el planeta Urano
        if (planetaSeleccionado === "urano")
        {
        tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_URANO).toFixed(2)
        }
        //Calcular cual es la caida en el planeta Neptuno.
        if (planetaSeleccionado === "neptuno") 
        {
        tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_NEPTUNO).toFixed(2)
        }
        //Calcular cual es la caida en el planeta Neptuno.
        if (planetaSeleccionado === "pluton")
        {
        tiempoCaida = Math.sqrt((2*alturaCaida)/GRAVEDAD_PLUTON).toFixed(2)
        }

      
   //El mensje se envia solo cuando el campo correspondiente tiene numeros positivos y se puede calcular con el planeta elejido.
      mensajeConElCalculoDelPeso.textContent = "Tiempo de objeto callendo en "+planetaSeleccionado+" es de "+tiempoCaida;
  }
  }
});
//La function se en carga de que si es 1 no es  numero, si es menor que 0 es 2 e son numeros negativos y si el numero es 0 todo esta en orden.
  function validar(caida){
 
  if ( isNaN(caida))
  {
      return 1
  }
  else 
  {
      if (caida <0)
      {
         return 2
      } 
  }
  return 0
  
  }



//FUNCION 3 ---------------------------------------------
const DIAMETRO_JUPITER = 143200; // km 
const DIAMETRO_SATURNO = 120536; // km 
const DIAMETRO_URANO = 51118; // km 
const DIAMETRO_NEPTUNO = 49528; // km 
const DIAMETRO_TIERRA = 12756; // km 
const DIAMETRO_VENUS = 12100; // km 
const DIAMETRO_MARTE = 6794; // km 
const DIAMETRO_MERCURIO = 4878; // km
const DIAMETRO_PLUTON = 2376; //km

/**
 * FORMULA PARA COMPARAR TAMAÑOS
 * (Diametro Planeta 1 / Diametro Planeta 2)
 * Con esta formula obtienes cuantas veces mas grande es uno del otro
 * Por ejemplo: 10/5 = 2 -> El primer planeta es 2 veces el segundo
 * Si los pones al reves: 5/10 = 0.5 -> Te da un numero menor a cero  
 * y significa que primer planeta es mas pequeño, en este caso la mitad del segundo  
 */

// Aqui escribiras la logica para comparar los tamaños de dos planetas
document.getElementById("calcular-3").addEventListener("click", function (event) {
  event.preventDefault();

  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado1 = document.getElementById("planeta-3").value;
  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado2 = document.getElementById("planeta-4").value;
  // Elemento donde se mostrará el resultado final.
  const mensajeConElCalculoDelPeso = document.getElementById("resultado-3");
  let DiametroPlaneta1=0
  let DiametroPlaneta2=0
  let comparar=0
  /**
   * Escribe tu código aquí
   */
//El if se encarga de sleccionar al palanetaSeleccionado1 para comenzar con el calculo de comparar los tomaños de los dos planetas.
if ( planetaSeleccionado1 === "mercurio")
{
 DiametroPlaneta1=DIAMETRO_MERCURIO
}
if ( planetaSeleccionado1 === "venus")
{
 DiametroPlaneta1=DIAMETRO_VENUS
}
if ( planetaSeleccionado1 === "marte")
{
 DiametroPlaneta1=DIAMETRO_MARTE
}
if ( planetaSeleccionado1 === "jupiter")
{
 DiametroPlaneta1=DIAMETRO_JUPITER
}
if ( planetaSeleccionado1 === "saturno")
{
 DiametroPlaneta1=DIAMETRO_SATURNO
}
if ( planetaSeleccionado1 === "urano")
{
 DiametroPlaneta1=DIAMETRO_URANO
}
if ( planetaSeleccionado1 === "neptuno")
{
 DiametroPlaneta1=DIAMETRO_NEPTUNO
}
if ( planetaSeleccionado1 === "pluton")
{
 DiametroPlaneta1=DIAMETRO_PLUTON
}

//El if se encarga de sleccionar al palanetaSeleccionado2 para comenzar con el calculo de comparar los tomaños de los dos planetas.
if (planetaSeleccionado2  === "mercurio")
{
 DiametroPlaneta2=DIAMETRO_MERCURIO
}
if (planetaSeleccionado2  === "venus")
{
 DiametroPlaneta2=DIAMETRO_VENUS
}
if ( planetaSeleccionado2 === "marte")
{
 DiametroPlaneta2=DIAMETRO_MARTE
}
if ( planetaSeleccionado2 === "jupiter")
{
 DiametroPlaneta2=DIAMETRO_JUPITER
}
if ( planetaSeleccionado2 === "saturno")
{
 DiametroPlaneta2=DIAMETRO_SATURNO
}
if ( planetaSeleccionado2 === "urano")
{
 DiametroPlaneta2=DIAMETRO_URANO
}
if ( planetaSeleccionado2 === "neptuno")
{
 DiametroPlaneta2=DIAMETRO_NEPTUNO
}
if ( planetaSeleccionado2 === "pluton")
{
 DiametroPlaneta2=DIAMETRO_PLUTON
}

comparar = (DiametroPlaneta1/DiametroPlaneta2).toFixed(2)
  /**
   * Modificamos el texto del elemento resultado para mostrar la comparacion de tamaños
   * 
   * Ejemplo: El primero es 3 veces mas grande que el segundo
   */
  mensajeConElCalculoDelPeso.textContent = planetaSeleccionado1+" es "+ comparar+" veces mas grande que "+planetaSeleccionado2;
});


//FUNCION 4 ---------------------------------------------
//Planetas ordenados en orden de tamaño

const TAMAÑO_PLUTON = 1
const TAMAÑO_MERCURIO = 2
const TAMAÑO_MARTE = 3
const TAMAÑO_VENUS = 4
const TAMAÑO_TIERRA = 5
const TAMAÑO_NEPTUNO = 6
const TAMAÑO_URANO = 7
const TAMAÑO_SATURNO = 8
const TAMAÑO_JUPITER = 9

// Aqui escribiras la logica para calcular que planeta es mas grande
document.getElementById("calcular-4").addEventListener("click", function (event) {
  event.preventDefault();

	// Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado1 = document.getElementById("planeta-5").value;
  // Input que obtiene el nombre del planeta seleccionado
  const planetaSeleccionado2 = document.getElementById("planeta-6").value;
  // Elemento donde se mostrará el resultado final.
  const mensajeConElCalculoDelPeso = document.getElementById("resultado-4");
let tamañodePlaneta1= 0
let tamañodePlaneta2 = 0
let planetamasGrande= 0
  /**
   * Escribe tu código aquí
   */
 //El if se encarga de sleccionar al palanetaSeleccionado1 para comenzar con el calculo de quien de los dos es mas grande.  
if ( planetaSeleccionado1 === "mercurio")
{
 tamañodePlaneta1=TAMAÑO_MERCURIO
}
if ( planetaSeleccionado1 === "venus")
{
 tamañodePlaneta1=TAMAÑO_VENUS
}
if ( planetaSeleccionado1 === "marte")
{
tamañodePlaneta1=TAMAÑO_MARTE
}
if ( planetaSeleccionado1 === "jupiter")
{
 tamañodePlaneta1=TAMAÑO_JUPITER
}
if ( planetaSeleccionado1 === "saturno")
{
 tamañodePlaneta1=TAMAÑO_SATURNO
}
if ( planetaSeleccionado1 === "urano")
{
tamañodePlaneta1=TAMAÑO_URANO
}
if ( planetaSeleccionado1 === "neptuno")
{
 tamañodePlaneta1=TAMAÑO_NEPTUNO
}
if ( planetaSeleccionado1 === "pluton")
{
tamañodePlaneta1=TAMAÑO_PLUTON
}

//El if se encarga de sleccionar al palanetaSeleccionado2 para comenzar con el calculo de quien de los dos es mas grande.
if (planetaSeleccionado2  === "mercurio")
{
 tamañodePlaneta2=TAMAÑO_MERCURIO
}
if (planetaSeleccionado2  === "venus")
{
 tamañodePlaneta2=TAMAÑO_VENUS
}
if ( planetaSeleccionado2 === "marte")
{
tamañodePlaneta2=TAMAÑO_MARTE
}
if ( planetaSeleccionado2 === "jupiter")
{
tamañodePlaneta2=TAMAÑO_JUPITER
}
if ( planetaSeleccionado2 === "saturno")
{
 tamañodePlaneta2=TAMAÑO_SATURNO
}
if ( planetaSeleccionado2 === "urano")
{
 tamañodePlaneta2=TAMAÑO_URANO
}
if ( planetaSeleccionado2 === "neptuno")
{
 tamañodePlaneta2=TAMAÑO_NEPTUNO
}
if ( planetaSeleccionado2 === "pluton")
{
 tamañodePlaneta2=TAMAÑO_PLUTON
}
//El if se esta encagando si los planetas son iguales de su mensaje correpodiente y el else si no son iguales los planetas sigue con la otra parte del codigo.
if (planetaSeleccionado1 === planetaSeleccionado2){
 mensajeConElCalculoDelPeso.textContent = "Los planetas seleccionados son del     mismo tamaño."
}
else{
//El if indica cual de los dos planetas seleccionados en mas grande.
  if (tamañodePlaneta1>tamañodePlaneta2)
  {
       planetamasGrande = planetaSeleccionado1
  }
  else
  {
       planetamasGrande = planetaSeleccionado2
  }
  
  mensajeConElCalculoDelPeso.textContent = "El planeta "+planetamasGrande+" es mas grande.";
  }
});