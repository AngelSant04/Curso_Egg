const nombre = 'angel'
const edad = 23
const profesion = 'programador'
const ubicacion = 'chiclayo'
const hobby = 'jugar futbol'

let isOnline = false

const rpta = prompt("¿Estas Conectado? (SI, NO)")

const rptaValidada = rpta ?? "xd"

if (rptaValidada == "xd") {
    alert("No se ingreso nada")
} else {
    if(rptaValidada.toUpperCase() == "SI" || rptaValidada.toUpperCase()=="NO") {
        const newOnline = isOnline == false ? true : false
        alert(newOnline ? "Estas Conectado" : "No estas conectado se borrara el template")
    } else {
        alert("Respuesta no es valida")
    }
}

document.querySelector("#text-principal").textContent = `Hola mi nombres es ${nombre} tengo ${edad} años soy ${profesion}, actualmente vivo en ${ubicacion}, y mi hoby es ${hobby}`

// console.log(`Hola mi nombres es ${nombre} tengo ${edad} años soy ${profesion}, actualmente vivo en ${ubicacion}, y mi hoby es ${hobby}`)