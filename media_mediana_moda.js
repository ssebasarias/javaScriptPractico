// [■,■,■,■].map(■→●) ⇒ [●,●,●,●]
// [■,●,■,▲].filter(■→true) ⇒ [■,■]
// [■,●,■,▲].find(●→true) ⇒ ●
// [■,●,■,▲].findIndex(●→true) ⇒ 1
// [■,●,■,▲].fill(●) ⇒ [●,●,●,●]
// [■,●,■,▲].some(●→true) ⇒ true
// [■,●,■,▲].every(●→true) ⇒ false

// CREAR ARRAY

function crearArreglo(dato) {
    let array = [];
    array.push(dato);
    return array;
}

// MEDIA

function mediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
}

// MEDIANA

function esPar(numerito) {
    if (numerito % 2 === 0) {
    return true;
    } else {
    return false;
    }
}

// function ordenarLista(lista){
//     var aux;
//     for (let i = 0; i < lista.length-1; i++) {
//         for (let j = i+1; j < lista.length; j++) {
//             if (lista[j]<lista[i]) {
//                 aux = lista[i];
//                 lista[i] = lista[j];
//                 lista[j] = aux;
//             }
//         }
//     }
// }

function mediana (array) {

    const lista = array.sort(function (a, b) {return a - b; });
    const mitadLista = parseInt(lista.length / 2);

    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
        ]);
        
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

// MODA

function moda (lista) {
    const lista1Count = {};

    lista.map(
    function (elemento) {
        if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
        } else {
        lista1Count[elemento] = 1;
        }
    }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
    );
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}


// INTERACCION HTML 

function calcularMediaAritmetica() {
    const input = createElement(document.getElementById("inputArray"));
}