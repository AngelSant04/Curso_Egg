const misDatosFisicos = {
    nombre:"Angel",
    edad: 23,
    direccion: {
        calle: 'Saenz Peña',
        numero: 1339,
        ciudad: 'Chiclayo'
    },
    altura: '1.67',
    peso: '70kg',
    hobby: 'jugar futbol'
}
const holamundoprueba = ''

console.log(misDatosFisicos.direccion.pais);
console.log(holamundoprueba?.estudio);


function impresion (id="perfil3") {
    const contenidoPerfil = `<h2>${misDatosFisicos.nombre}</h2><br>
    Edad: ${misDatosFisicos.edad} <br>
    Direccion: ${misDatosFisicos.direccion.calle} ${misDatosFisicos.direccion.numero} - ${misDatosFisicos.direccion.calle} - ${misDatosFisicos.direccion.pais ?? "Pais por defecto"}<br>
    Altura: ${misDatosFisicos.altura}<br>
    Peso: ${misDatosFisicos.peso}<br>
    Hobby: ${misDatosFisicos.hobby}<br>
`


    document.getElementById(id).innerHTML = contenidoPerfil
}

impresion("perfil2")