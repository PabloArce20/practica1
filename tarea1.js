/*Pregunta 1:
Declara una variable nombre con tu nombre y otra edad con tu edad. Luego, muestra en consola:
"Hola, mi nombre es [nombre] y tengo [edad] años."*/

let name = "Your name";
let age = 50;

console.log(`"Hola, mi nombre es ${name} y tengo ${age} años."`)


/*Pregunta 2:
Calcula el área de un rectángulo (base = 5, altura = 3) y muestra el resultado.*/

let base = 5;
let altura = 3;
let area = base * altura;
console.log(`El área del rectángulo es: ${area}`);

/*Pregunta 3:
Crea una condición que verifique si un número es par o impar.*/


if (numero % 2 === 0) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);
}

/*Pregunta 4:
Usa un bucle for para imprimir los números del 1 al 5.*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


/*Pregunta 5:
Crea una función sumar que reciba dos números y devuelva su suma.*/

function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 4)); // 7

/*Arrays
Pregunta 6:
Dado el array let frutas = ["manzana", "banana", "pera"];, agrega "uva" al final y muestra el array.*/

let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");

/*Pregunta 7:
Crea un objeto usuario con las propiedades nombre (string) y edad (number), posteriormente muestra la llave y el valor de ese objeto con el bucle correcto, usar el bucle incorrecto anulara la pregunta*/

let usuario = {
    nombre: "Juan",
    edad: 30
};
for (let key in usuario) {
    console.log(`${key}: ${usuario[key]}`);
}

/*Pregunta 8:
Dado let numeros = [1, 2, 3, 4];, usa un método para obtener un nuevo array con cada número multiplicado por 2.

Pista: para hacer esta pregunta te recomiendo que investigues sobre lo métodos de los arrays, algunos de sus métodos seria map, filter, find. Averigua cual seria la función correcta de Arrays para poder completar este ejercicio*/

let numeros = [1, 2, 3, 4];
let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(numerosMultiplicados); // [2, 4, 6, 8]

/*Pregunta 9:
Convierte esta función a una función flecha:*/

const restar = (a, b) => a - b;
console.log(restar(5, 3)); // 2

/*Pregunta 10:
Crea una función filtrarPares que reciba un array de números y devuelva solo los pares.

Pista: puedes lograrlo con una sola linea de Código

Ejemplo:

filtrarPares([1, 2, 3, 4]); // [2, 4]*/

const filtrarPares = (numeros) => numeros.filter(numero => numero % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4])); // [2, 4]


/*Parte 2: Git (5 preguntas)
1. Inicializar un repositorio
Pregunta 1:
¿Qué comando se usa para iniciar un nuevo repositorio de Git en un proyecto local?*/

git init


/*Pregunta 2:
¿Cómo clonarías un repositorio remoto desde GitHub si tuvieras la siguiente URL? (Ejemplo: https://github.com/user/repo.git).*/

git clone <url_del_repositorio>

/*Pregunta 3:
Explica los pasos para hacer un commit de los cambios en un archivo index.js.*/

git add index.js
git commit -m "Descripción del commit"
git push origin main

/*Pregunta 4:
¿Qué comando se usa para inicializar un repositorio local con una rama llamada feature-login ?*/

git init --initial-branch=feature-login

/*Pregunta 5:
¿Qué comando envía los commits locales a la rama main del repositorio remoto?*/

git push origin main

