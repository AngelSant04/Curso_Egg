const hobbies = {
  enPareja: [
    "Cine",
    "Viajar",
    "Cocinar juntos",
    "Bailar",
    "Hacer deporte en pareja",
  ],
  conAmigos: [
    "Jugar videojuegos",
    "Ir a conciertos",
    "Hacer barbacoas",
    "Practicar deportes de equipo",
    "Organizar salidas al aire libre",
  ],
  conFamilia: [
    "Ver películas en familia",
    "Preparar comidas especiales",
    "Hacer manualidades",
    "Jugar juegos de mesa",
    "Realizar excursiones juntos",
  ],
};

const { enPareja, conFamilia } = hobbies;
console.log(enPareja);
console.log(conFamilia);

const { enPareja: [, , terceroPareja], conFamilia: [, , , cuartoFamilia] } = hobbies;


console.log("Tercer hobby en pareja:", terceroPareja);
console.log("Cuarto hobby en familia:", cuartoFamilia);


const template = `
<h2>Mi tercer hobby favorito para hacer en pareja es: ${terceroPareja} y mi cuarto hobby favorito para hacer en familia es ${cuartoFamilia}</h2>
`

// si

