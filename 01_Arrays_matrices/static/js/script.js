console.log("conectado a js...")


function construirFrase() {
    let palabras = ["programar" + " es"];
    palabras.push(" increíble", "borrar");
    palabras.push("borrar");

    palabras.pop("borrar")
    let eliminada = palabras.pop("borrar");

    alert(`EL ${palabras.join(" ")}`);
    alert(`la palabra eliminada fue "${eliminada}".`);
}

function esperarfila() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("luis");
    let salon = [alumnos.shift()]
    alert(`Entro ${salon[0]} y la fila ahora es: ${alumnos.join(",")}.`);
}

function reordenarnumeros() {
    let datos = [3, "gatos", "negros", "duermen"];
    datos[0] += 2;
    datos.push("placidamente.")
    alert(datos.join(" "));
}


function coordenadaMatriz() {
    let matriz = [
        [10, 30],
        [30, 40],
    ];
    let suma = matriz[0, 0] + matriz[1][1]
    alert(`suma de ${matriz[0, 0]} y${matriz[1, 1]} da un total de ${suma}.`)
}

function operadorIntruso() {
    let datos = [1, [2, [3, 4]]];
    datos[1][1].push(5);
    alert(datos);
}

function traduccionAcciones() {
    let sujetos = ["el programdor", "la computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];
    alert(`${sujetos[0]} ${verbos[0][1]}`)
}

function limpiardatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift();
    inventario.pop();
    inventario.unshift("Monitor")
    alert(`${inventario.join(" - ")}`)
}


function matrizModificada() {
    let tablero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    tablero[0][0] = 1;
    tablero[1][1] = 1;
    tablero[2][2] = 1;
    alert(tablero)
}