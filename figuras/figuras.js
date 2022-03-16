// CUADRADO

console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return lado  * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

console.groupEnd();

// TRIANGULO

console.group("Triangulo");

function alturaTraingulo (lado1, lado2, base) {
    let h;
    if (lado1 === lado2 && lado1, lado2 != base) { // Isoseles
        h = Math.sqrt( (Math.pow(lado1,2)) - (Math.pow(base,2) / 4) );
    } else {
        if (lado1 === lado2 && lado1, lado2 === base) { // Equilatero
            h = (Math.sqrt(3 * lado1))  / 2;
        } else { // Escaleno
            var s = (lado1 + lado2 + base) / 2;
            h = (2 / lado1) * (Math.sqrt( s * (s - lado1) * (s - lado2) * (s - base) ));
        }
    }
    return h;
}

function perimetroTriangulo (lado1, lado2, base) {
    let p;
    if (lado1 === lado2 && lado1, lado2 != base) { // Isoseles
        p = 2 * lado1 + base;
    } else {
        if (lado1 === lado2 && lado1, lado2 === base) { // Equilatero
            p = 3 * lado1;
        } else { // Escaleno
            p = lado1 + lado2 + base;
        }
    }
    return p;
}

function areaTriangulo (lado1, lado2, base) {
    let p;
    if (lado1 === lado2 && lado1, lado2 != base) { // Isoseles
        p = (base * (Math.sqrt(Math.pow(lado1,2) - (Math.pow(base,2) / 4)))) / 2;
    } else {
        if (lado1 === lado2 && lado1, lado2 === base) { // Equilatero
            p = (Math.sqrt(3) / 4) * Math.pow(lado1,2);
        } else { // Escaleno
            const altura = alturaTraingulo(lado1, lado2, base);
            p = (base * altura) / 2;
        }
    }
    return p;
}

console.groupEnd();

// CIRCULO

console.group("Circulo");

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo (radio) {
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo (radio) {
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//INTERACCION CON HTML CUADRADO

function calcularPerimetroCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//INTERACCION CON HTML TRIANGULO

function calcularAlturaTriangulo () {
    const input1 = document.getElementById("iniputLadoTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("iniputLadoTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("iniputLadoTriangulo3");
    const value3 = input3.value;

    const altura = alturaTraingulo(value1, value2, value3);
    alert(altura);
}

function calcularPerimetroTriangulo () {
    const input1 = document.getElementById("iniputLadoTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("iniputLadoTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("iniputLadoTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo () {
    const input1 = document.getElementById("iniputLadoTriangulo1");
    const value1 = input1.value;

    const input2 = document.getElementById("iniputLadoTriangulo2");
    const value2 = input2.value;

    const input3 = document.getElementById("iniputLadoTriangulo3");
    const value3 = input3.value;

    const area = areaTriangulo(value1, value2, value3);
    alert(area);
}


//INTERACCION CON HTML CIRCULO

function calcularPerimetroCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo () {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}