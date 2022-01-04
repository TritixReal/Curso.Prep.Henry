// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var numerox = x > y
  var numeroy = y > x
  var Igual = x === y
  if (numerox === true) {
    return x
  } else 
  if (numeroy === true) {
    return y
  } return x

}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var borracha = edad >= 18
  if (borracha === true) {
    return "Allowed"
  } return "Not allowed"
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var online = status === 1
  var away = status === 2
  if (online === true) {
    return "Online"
  } else
  if (away === true) {
    return "Away"
  } return "Offline"
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var aleman = idioma === "aleman"
  var mandarin = idioma === "mandarin"
  var ingles = idioma === "ingles"
  if (aleman === true) {
    return "Guten Tag!"
  } else
  if (mandarin === true) {
    return "Ni Hao!"
  }else
  if (ingles === true) {
    return "Hello!"
  } return "Hola!"
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var blue = color === "blue"
  var red = color === "red"
  var green = color === "green"
  var orange = color === "orange"
  if (blue === true) {
    return "This is blue"
  } else
  if (red === true) {
    return "This is red"
  }else
  if (green === true) {
    return "This is green"
  }else
  if (orange === true) {
    return "This is orange"
  } return "Color not found"
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var true1 = numero === 10
  var true2 = numero === 5
  if (true1 === true) {
    return true1
  }else
  if (true2 === true) {
    return true2
  } return !!true1
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var nose = numero >=21 && numero <=49
  var falso = numero <=20 || numero >=50
  var yanose = 10 < 1
  if (nose === true) {
    return nose
  } else
  if (falso === true) {
    return yanose
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var punto = numero === 0.5
  var falso = 10 < 1
  var prueba = Math.floor (numero) === numero
  if (prueba === true) {
    return prueba
  } else
  if (numero === 0.5) {
    return falso
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var divtres = numero / 3 
  var divtrescomp = divtres === Math.floor(divtres)
  var divcinco = numero / 5
  var divcincocomp = divcinco === Math.floor(divcinco)
  var divall = divtrescomp === true && divcincocomp === true
  
  var mocho = numero

  if (divall === true) {
    return "fizzbuzz"
   } 
  if (divtrescomp === true) {
    return "fizz"
  } else 
  if (divcincocomp === true) {
    return "buzz"
  }else
  if (divall === false) {
    return mocho
  }
  
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
 
  var pos1 = Math.sign(num1)
  var pos2 = Math.sign(num2)
  var pos3 = Math.sign(num3)
  var compr = pos1 === 1
  var compr = pos1 === -1
  var mayor1 = num1 > num2 && num1 > num3
  var mayor3 = num3 > num1 && num3 > num2
  var suma = num3 + 1
  var negativos = num1 < 0 || num2 < 0 
  var ceros = num1o === 1 || num2o === 1  
  var num1o = num1 + 1
  var num2o = num2 + 1
  var num3o = num3 + 1

  
  if ( negativos === true || num3 < 0 ){
   return "Hay negativos"
  } else
  if (mayor1 === true && num1 > 0) {
    return "Número 1 es mayor y positivo"
  } else
  if (mayor3 === true){
    return suma
  } else
  if (ceros == true || num3o === 1) {
    return "Error"
  } return false
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  const esPrimo = numero => {
    // Casos especiales
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
  }
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  var verda = "Soy verdadero"
  var miente = "Soy falso"

  if (valor == true) {
    return verda
  } else
  if ( valor == false) {
    return miente
  }

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   

  var miArray = new Array()

    for (var multi = 0  ; multi < 11  ; multi++ ) {
      if (multi < 11) {
        miArray[multi] = multi + 6
      }
        
          return miArray;
      }
  
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var man =(''+numero).length;
  var num = numero
  var comprobacion = man === 3
  var tru = 5 < 6
  var fal = 6 < 5

  if (comprobacion === true) {
    return tru
  } return fal
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var miArray = [];
  
  var brinca = numero
  var brincaloca = 0
  var total = brinca + brincaloca
  var control 
  do {brincaloca = brincaloca + 5; miArray.push(Total) ; }
      while (brincaloca < 45 );


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
