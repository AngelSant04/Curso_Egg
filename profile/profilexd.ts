let nombrePersonal: string = "Juan Pérez";
let edadPersonal: number = 30;
let casadoPersonal: boolean = true;
let direccionPersonal: string = "Calle Falsa 123";
let telefonoPersonal: string = "555-1234";

let data: any = {
  nombre: nombrePersonal,
  edad: edadPersonal,
  casado: casadoPersonal,
  direccion: direccionPersonal,
  telefono: telefonoPersonal,
};

let familiar1 = {
  nombre: "Ana Pérez",
  edad: 28,
  casado: true,
  direccion: "Calle Falsa 456",
  telefono: "555-5678",
};

let familiar2 = {
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

function isNumber(value: any): value is number {
  return typeof value === "number";
}

if (isNumber(casadoPersonal)) {
  console.log(`${casadoPersonal} es un número`);
} else {
  console.log(`${casadoPersonal} no es un número`);
}

interface Persona {
  nombre: string;
  edad: number;
  casado: boolean;
  direccion: string;
  telefono: string;
}

const personas: Persona[] = [
  { nombre: "Angel Luis", edad: 23, casado: false, direccion: "Av. Chiclayo", telefono: "987654321" },
  { nombre: "Angel Luis Dod", edad: 23, casado: false, direccion: "Av. Chiclayo Dos", telefono: "987654322" },
];

const nombres: string[] = ["Angel Luis", "Angel Luis Dos", "Angel Luis Tres"];


function persona<T>(arg: T[]): T {
  return arg[0];
}

const primeraPersona = persona(personas);
const primerNombre = persona(nombres);

console.log(primeraPersona);
console.log(primerNombre);

class Portfolio<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  listar(): T[] {
    return this.items;
  }

  suma(): number {
    if (this.items.length === 0 || typeof this.items[0] !== 'number') {
      throw new Error("Este metodo solo se ejecuta cuando son de tipo numero.");
    }
    return (this.items as unknown as number[]).reduce((acc, val) => acc + val, 0);
  }

  concatenar(): string {
    if (this.items.length === 0 || typeof this.items[0] !== 'string') {
      throw new Error("Este metodo solo se ejecuta cuando son de tipo cadena.");
    }
    return (this.items as unknown as string[]).join('');
  }
}

const numberPortfolio = new Portfolio<number>();
numberPortfolio.agregar(10);
numberPortfolio.agregar(20);
numberPortfolio.agregar(30);
console.log(numberPortfolio.listar());
console.log(numberPortfolio.suma());
// console.log(numberPortfolio.concatenar());

const stringPortfolio = new Portfolio<string>();
stringPortfolio.agregar("Hola");
stringPortfolio.agregar(" ");
stringPortfolio.agregar("Mundo");
console.log(stringPortfolio.listar());
console.log(stringPortfolio.concatenar());