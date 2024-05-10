const nombre = 'Angel';
const apellido = 'Santamaria';
const edad = 30;
const correo = 'angelsantamaria0412@gmail.com'
const direccion = 'Av. Saenz Peña 1339';
const ciudad = 'Chiclayo';

const misDatos = {
  nombre,
  apellido,
  edad,
  correo,
  direccion,
  ciudad,
  fisicos: {
    altura: '175 cm',
    peso: '75 kg',
    colorOjos: 'Café',
  }
};

const template = `
<h1>Perfil de Usuario</h1>
<p id="nombre">Nombre: ${misDatos.nombre} ${misDatos.apellido}</p>
<p id="edad">Edad: ${misDatos.edad}</p>
<p id="correo">Correo: ${misDatos.correo}</p>
<p id="direccion">Direccion: ${misDatos.direccion}</p>
<p id="ciudad">Ciudad: ${misDatos.ciudad}</p>
<p id="altura">Altura: ${misDatos.fisicos.altura ?? 'No define altura'}</p>
<p id="colorPelo">Color Pelo: ${misDatos.fisicos.colorPelo ?? 'No define el color de pelo'}</p>
`

document.getElementById("contenido").innerHTML = template

console.log(misDatos);
