// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Datos recibidos");
//     }, 2000);
//   });
// }
// fetchData().then((data) => {
//   console.log(data);
// });

// function getUserData() {
//   return fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.name);
//       return data.name;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }
// getUserData();

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Hola después de 2 segundos");
// }, 2000);

// console.log("Fin");

// async function fetchData() {
//   console.log("Inicio");
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("Datos recibidos");
//   console.log("Fin");
// }
// fetchData();

// function divide(a, b) {
//   try {
//     return a / b;
//   } catch (error) {
//     return null;
//   }
// }

// console.log(divide(10, 2));
// console.log(divide(5, 0));
// console.log(divide(8, 4));

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

try {
  const { name, age, city } = JSON.parse(jsonString);
  console.log(name);
  console.log(age);
  console.log(city);
} catch (error) {
  console.error("Error al analizar el JSON:", error.message);
}
