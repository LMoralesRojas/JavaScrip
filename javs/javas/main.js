// VARIABLES
 // Declaro las variables a, b y c(ya sea con let, var o const)
 {
 const a = 5;
 const b = 10;
 let c = a + b;
 
 // Imprimir el resultado en la consola
 console.log("El valor de a es: " + a);
 console.log("El valor de b es: " + b);
 console.log("El valor de c (suma de a y b) es: " + c);
 }
 console.log("Ejercicio 2");
 {
  let a = 5;
  let b = 10; // Puedes cambiar este valor
  let c; // Variable para almacenar el mayor
  
  // Determinar cuál es el mayor
  if (a > b) {
      c = a; // Si a es mayor que b, c toma el valor de a
  } else {
      c = b; // Si b es mayor o igual a a, c toma el valor de b
  }
  
  // Imprimir el resultado en la consola
  console.log("El número mayor es: " + c);
  }

// Función para verificar si un número es par o impar
function verificarParImpar() {
  let numeroIngresado = prompt("Por favor, ingrese un número:");
  numeroIngresado = Number(numeroIngresado);
  
  if (numeroIngresado % 2 === 0) {
      alert("El número " + numeroIngresado + " es par.");
  } else {
      alert("El número " + numeroIngresado + " es impar.");
  }
}

// Función para pedir el nombre del usuario y mostrar un saludo en la página
function saludarUsuario() {
  let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
  document.getElementById("saludo").textContent = "Hola, " + nombreUsuario + "! Bienvenido/a.";
}

// Asignar eventos a los botones
document.getElementById("checkNumber").addEventListener("click", verificarParImpar);
document.getElementById("greetUser").addEventListener("click", saludarUsuario);

// Ejercicio 3
console.log("Ejercicio 3");
let variable = 10;

// Usar un bucle while para restarle 1 hasta que sea igual a 0
while (variable > 0) {
    console.log("Valor actual de la variable: " + variable);
    variable -= 1; // Restar 1 a la variable
}

// Imprimir el valor final cuando la variable es 0
console.log("Valor final de la variable: " + variable);

let numero; // Declarar la variable para almacenar el número

do {
    // Pedir al usuario que ingrese un número
    numero = prompt("Por favor, ingresa un número mayor a 100:");
    numero = Number(numero); // Convertir el valor ingresado a un número

    // Mostrar el número ingresado en la consola
} while (numero <= 100); // Continuar hasta que el número sea mayor a 100

console.log("Ingresaste un numero mayor a 100:"+ numero);

console.log("Ejercicio 4");
// Definir la función esPar
function esPar(numero) {
  // Verificar si el número es par
  return numero % 2 === 0;
}

// Probar la función con diferentes números
console.log(esPar(4)); // true, porque 4 es par
console.log(esPar(7)); // false, porque 7 es impar
console.log(esPar(10)); // true, porque 10 es par
console.log(esPar(15)); // false, porque 15 es impar
console.log(esPar(0)); // true, porque 0 es par

/// Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  // Aplicar la fórmula para convertir de Celsius a Fahrenheit
  let fahrenheit = celsius * 1.8 + 32;
  
  // Mostrar por pantalla la equivalencia
  console.log(celsius + "°C es equivalente a " + fahrenheit + "°F.");
  
  return fahrenheit;
}

// Probar la función con diferentes valores
convertirCelsiusAFahrenheit(0);    // 0°C es equivalente a 32°F
convertirCelsiusAFahrenheit(25);   // 25°C es equivalente a 77°F
convertirCelsiusAFahrenheit(100);  // 100°C es equivalente a 212°F
convertirCelsiusAFahrenheit(-40);  // -40°C es equivalente a -40°F

console.log("Ejercicio 5");
// Definir el objeto persona
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  
  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};

// Mostrar las propiedades originales en la consola
console.log("Antes de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

// Usar el método para cambiar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log("\nDespués de cambiar la ciudad:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
