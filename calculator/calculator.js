const num1 = Number(prompt("Ingrese primero numero"));
const num2 = Number(prompt("Ingrese segundo numero"));

const dividir = (num1, num2, callback) => {
    console.log(num1);
    console.log(num2);
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert("Error: Los parámetros deben ser números.");
    return;
  }
  if (num2 === 0) {
    alert("Error: No se puede dividir por cero.");
    return;
  }
  const resultado = num1 / num2;

  callback(resultado);
};

function manejarResultado(resultado) {
  document.getElementById(
    "resultado"
  ).innerText = `El resultado de la división es: ${resultado}`;
}

dividir(num1, num2, manejarResultado);
