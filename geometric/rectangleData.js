class Cuadrado {
  constructor(name, ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
    this.name = name;
  }
}

const miCuadradoUno = new Cuadrado("uno", 5, 5);
const miCuadradoDos = new Cuadrado("dos", 3, 4);
const miCuadradoTres = new Cuadrado("tres", 4, 4);

const arrCuadrado = [miCuadradoUno, miCuadradoDos, miCuadradoTres];

export default arrCuadrado
