console.log("conectado a js...")


function construirFrase() {
    let palabras = ["programar" + " es"];
    palabras.push(" increíble", "borrar");
    palabras.pop("borrar");
    alert(palabras)
}

function esperarfila() {
    let alumnos = ["Juan", "María", "Pedro"];
    alumnos.unshift("luis");
    alumnos.shift("juan");
    alert(alumnos)
}