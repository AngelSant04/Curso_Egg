var nombrePersonal = "Juan Pérez";
var edadPersonal = 30;
var casadoPersonal = true;
var direccionPersonal = "Calle Falsa 123";
var telefonoPersonal = "555-1234";
var data = {
    nombre: nombrePersonal,
    edad: edadPersonal,
    casado: casadoPersonal,
    direccion: direccionPersonal,
    telefono: telefonoPersonal,
};
var familiar1 = {
    nombre: "Ana Pérez",
    edad: 28,
    casado: true,
    direccion: "Calle Falsa 456",
    telefono: "555-5678",
};
var familiar2 = {
    nombre: "Carlos Pérez",
    edad: 35,
    casado: false,
    direccion: "Calle Falsa 789",
    telefono: "555-9876",
};
console.log(typeof nombrePersonal);
console.log(typeof edadPersonal);
console.log("nombre" in familiar1);
console.log("ciudad" in familiar1);
console.log("casado" in familiar2);
console.log("departamento" in familiar2);
function isNumber(value) {
    return typeof value === "number";
}
if (isNumber(casadoPersonal)) {
    console.log("".concat(casadoPersonal, " es un n\u00FAmero"));
}
else {
    console.log("".concat(casadoPersonal, " no es un n\u00FAmero"));
}
var personas = [
    { nombre: "Angel Luis", edad: 23, casado: false, direccion: "Av. Chiclayo", telefono: "987654321" },
    { nombre: "Angel Luis Dod", edad: 23, casado: false, direccion: "Av. Chiclayo Dos", telefono: "987654322" },
];
var nombres = ["Angel Luis", "Angel Luis Dos", "Angel Luis Tres"];
function persona(arg) {
    return arg[0];
}
var primeraPersona = persona(personas);
var primerNombre = persona(nombres);
console.log(primeraPersona);
console.log(primerNombre);
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.items = [];
    }
    Portfolio.prototype.agregar = function (item) {
        this.items.push(item);
    };
    Portfolio.prototype.listar = function () {
        return this.items;
    };
    Portfolio.prototype.suma = function () {
        if (this.items.length === 0 || typeof this.items[0] !== 'number') {
            throw new Error("This method can only be used with a portfolio of numbers.");
        }
        return this.items.reduce(function (acc, val) { return acc + val; }, 0);
    };
    Portfolio.prototype.concatenar = function () {
        if (this.items.length === 0 || typeof this.items[0] !== 'string') {
            throw new Error("This method can only be used with a portfolio of strings.");
        }
        return this.items.join('');
    };
    return Portfolio;
}());
var numberPortfolio = new Portfolio();
numberPortfolio.agregar(10);
numberPortfolio.agregar(20);
numberPortfolio.agregar(30);
console.log(numberPortfolio.listar());
console.log(numberPortfolio.suma());
// console.log(numberPortfolio.concatenar());
var stringPortfolio = new Portfolio();
stringPortfolio.agregar("Hola");
stringPortfolio.agregar(" ");
stringPortfolio.agregar("Mundo");
console.log(stringPortfolio.listar());
console.log(stringPortfolio.concatenar());
