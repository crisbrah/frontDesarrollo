//console.log('Hola amigos! 3')

/* esto es u comentario de multiples lineas
 */

//TIPOS DE DATOS

//PRIMITIVOS: Number, String, Boolean, undefined, null, BigInt, Symbol
//-->NUMBER: 
const numero1=20
const numero2=20.5
const numero3=-36
console.log('numero1: '+numero1, 'numero2: '+numero2, 'numero3 '+numero3)
console.log(typeof numero1)

//-->STRING:
const palabra1='Jhoner'
const palabra2="Diego"
const palabra3="200"
console.log(typeof palabra1, typeof palabra2, typeof palabra3)

//-->BOOLEAN:
const tieneDescuento=true
console.log(tieneDescuento)
console.log(typeof tieneDescuento)

//-->UNDEFINED
let nombre
console.log(nombre)
console.log(typeof nombre)

//-->NULL
let apellido=undefined  // ❌
let apellido2=null
console.log(apellido)
console.log(typeof apellido)

//NO PRIMITIVOS: Object, Function, Array, Set , etc

//VARIABLES Y CONSTANTES

//ECMASCRIPT 5 ≣≡≡≡≡≡≡  ES5   se usaba var para iniciar una variable, no recomendado
//ECMASCRIPT 6 ≣≡≡≡≡≡≡  ES6   se usa const es lo recomendado

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 15
const PI = 3.14

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)


// LET -> ES6 (El uso de let es lo recomendado)

let edad2 = 35 // No es obligatorio inicializarlo

edad2 = "36"
edad2 = true
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1+2)
console.log(2*2)
console.log(7%2) //residual
console.log(2**3) //dos elevado al cbo

// OPERADORES DE ASIGNACION

const genero='femenino'

console.log(genero+'*') 

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad y desigualdad estricta (===) (ES RECOMDABLE USARLO CASI SIEMPRE)
// Devuelven un valor booleano (true o false)
// Este oprador si toma en cuenta el tipo de datos y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPRARDORES DE COMPARACIÓN, siempre devuelven un booleano

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(8 <= 5)

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// OPERADOR DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 38

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(imprimirSaludo)


// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false
const num1=42
console.log(num1>40)

// 3. Retornar True si un numero es menor que 60 sino devolver False
const num2=42
console.log(num2<60)

// 4. Retornar True si un numero es par sino devolver False
const num3=45
num4=num3%2
console.log(num4==0)

// 5. Retornar True si un numero es impar sino devolver False
const num5=45
num6=num5%2
console.log(num6===1)
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base=100
const altura=10
areatrian=base*altura/2
console.log(areatrian)
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
const numero7=870
const centena = Math.floor(numero7 / 100); // Obtiene la cifra de las centenas
const decena = Math.floor((numero7 % 100) / 10); // Obtiene la cifra de las decenas
const unidad = numero7 % 10; // Obtiene la cifra de las unidades
console.log(centena)
console.log(decena)
console.log(unidad)
// Elevar cada cifra al cubo
const cuboCentena = Math.pow(centena, 3);
const cuboDecena = Math.pow(decena, 3);
const cuboUnidad = Math.pow(unidad, 3);
//  Sumar los resultados de los cubos de las cifras
const sumaCubos = cuboCentena + cuboDecena + cuboUnidad;
console.log(`La suma de los cubos de las cifras del número ${numero7} es ${sumaCubos}.`);

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%


// CONDICIONALES (IF)

if (true) {
    // El bloque que se ejecuta si la condición es verdadera (true)
  }
  
  const numero = 33
  
  const esPar = numero % 2 === 0
  
  if (esPar) {
    console.log('Es número es par')
  }
  
  // CONDICIONALES (IF, ELSE)
  
  if (true) {
    // Se ejecuta este bloque si la condición es verdadera
  } else {
    // Se ejecuta este bloque si la condición es falsa
  }
  
  if (esPar) {
    console.log('Es número es par')
  } else {
    console.log('Es número es impar')
  }
  
  // CONDICIONALES (IF, ELSE IF, ELSE)
  
  if (true) {
    // Se ejecuta este bloque si la condición es verdadera
  } else if (true) {
    // Se ejecuta este bloque si la condición es verdadera
  } else if (true) {
    // Se ejecuta este bloque si la condición es verdadera
  } else {
    // Se ejecuta este bloque si ninguna condición se cumple
  }
  
  let heroe = 'Spiderman'
  
  if (heroe === 'Batman') {
    console.log('Hola soy Bruce')
  } else if (heroe === 'Spiderman') {
    console.log('Hola soy Peter')
  } else if (heroe === 'Ironman') {
    console.log('Hola soy Tony')
  } else {
    console.log('No soy un heroe :(')
  }
  
  // CONDICIONALES (SWITCH)
  
  heroe = 'Ironman'
  
  switch (heroe) {
    case 'Batman':
      console.log('Hola soy Bruce')
      break
    case 'Spiderman':
      console.log('Hola soy Peter')
      break
    case 'Ironman':
      console.log('Hola soy Tony')
      break
    default:
      console.log('No soy un heroe :(')
  }
  
  // ESTRUCTURAS REPETITIVAS
  
  // FOR (Sirve para repetir una o varias instrucciones)
  
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  
  // WHILE
  
  let j = 0
  
  while (j < 10) {
    console.log('while', j)
    // j = j + 1
    j++
  }
  
  // DO WHILE
  
  let k = 0
  
  do {
    console.log('do while', k)
    k = k + 1
    // k++
  } while (k < 10)
  
  // EJERCICIOS
  
  // 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
  
  const edadPersona = 38
  
  if (edadPersona >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
  
  // 2. Retornar un saludo en tres diferentes lenguajes:
  //    - si es español mostrará 'Hola'
  //    - si es inglés mostrará 'Hello'
  //    - si es aimara mostrará 'kamisaraki'

  // Lenguaje especificado
let lenguaje = 'español' // Puedes cambiar este valor a 'inglés' o 'aimara'

// Inicialización de la variable saludo
let saludo1

if (lenguaje === 'español') {
    saludo1 = 'Hola'
} else if (lenguaje === 'inglés') {
    saludo1 = 'Hello'
} else if (lenguaje === 'aimara') {
    saludo1 = 'Kamisaraki'
} else {
    saludo1 = 'Idioma no soportado'
}
// Mostrar el saludo
console.log(saludo1)

  // 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
  //    Si un numero es divisible entre 3 devolver 'fizz'
  //    Si un numero es divisible entre 5 devolver 'buzz'
  //    De lo contrario devolver el mismo número

// Número de entrada
let numero03 = 15 // Puedes cambiar este valor para probar con otros números

// Verificación de las condiciones
if (numero03 % 3 === 0 && numero03 % 5 === 0) {
    console.log('fizzbuzz')
} else if (numero03 % 3 === 0) {
    console.log('fizz')
} else if (numero03 % 5 === 0) {
    console.log('buzz')
} else {
    console.log(numero03)
}


  // 4. Retornar true si un numero es primo sino devolver false
  //    Pista: un numero primo es divisible por sí mismo y por 1

// Número de entrada
let numero04 = 29 // Puedes cambiar este valor para probar con otros números
// Inicializar la variable que almacenará el resultado
let esPrimo = true
// Comprobar si el número es primo
if (numero04 <= 1) {
    esPrimo = false; // Los números menores o iguales a 1 no son primos
} else {
    for (let i = 2; i <= Math.sqrt(numero04); i++) {
        if (numero04 % i === 0) {
            esPrimo = false; // Si encontramos un divisor, el número no es primo
            break;
        }
    }
}
if(esPrimo==true){ console.log(numero04+" es numero Primo")}
else console.log("no Es primo")

  // 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
  let resultado = []
  let i = 0
  
  while (i < 10) {
      resultado.push(i)
      i += 2
  }
  console.log(resultado);


// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
    // Cuerpo de la función y aquó va la lógica a ejecutar
  }
  
  // Ejecución, aquí estamos llamando a la función
  nombreDeLaFuncion()
  
  // Funciones sin parámetros
  
  function imprimirMiNombre() {
    console.log('Hola soy Victor')
    console.log('Y soy Frontend')
  }
  
  imprimirMiNombre()
  
  // Funciones con parámetros y valores por defecto
  
  function imprimirUnNombre(nombre = 'Anónimo') {
    // if (nombre === undefined) {
    //   nombre = 'Anónimo'
    // }
  
    console.log('Hola soy ' + nombre)
  }
  
  imprimirUnNombre() // Hola soy undefined
  imprimirUnNombre('Liliana') // Hola soy Liliana
  
  function imprimirNombreYApellido(nombre, apellido, edad) {
    // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.')
    // TEMPLATE STRINGS
    console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
  }
  
  imprimirNombreYApellido() // Hola soy undefined undefined y tengo undefined años.
  imprimirNombreYApellido('Jhoner', 'Perez', 38)

  // EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad) {
    if (edad >= 18) {
      console.log('Mayor de edad')
    } else {
      console.log('Menor de edad')
    }
  }
  
  esMayorOMenorDeEdad(38)
  esMayorOMenorDeEdad(8)
  esMayorOMenorDeEdad(3)
  
  // FUNCIONES CON RETORNO
  
  function esMayorOMenorDeEdadConRetorno(edad) {
    if (edad >= 18) {
      return 'Mayor de edad'
    } else {
      return 'Menor de edad'
    }
  }
  
  const resultado2 = esMayorOMenorDeEdadConRetorno(15)
  
  console.log('Resultado:', resultado)
  
  console.log(esMayorOMenorDeEdadConRetorno(25))
  console.log(esMayorOMenorDeEdadConRetorno(15))
  
  // PROMPT -> para leer valores del usuario
  // const tuEdad = prompt('Ingresa tu edad')
  
  // console.log(tuEdad)

  