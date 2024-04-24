const navSelector = document.getElementById("nav");

const options = [
  { text: "Ofertas de la semana", linkTo: "./outlet.html" },
  { text: "Productos", linkTo: "./how.html" },
  { text: "Contacto", linkTo: "./taxs.html" },
  { text: "Marcas", linkTo: "./orders.html" },
  //   { text: "", linkTo: "./warranty.html" },
];

for (let option of options) {
  const anchor = document.createElement("a");
  //Creacion de mi etiqueta li
  // <li></li>
  const etiquetali = document.createElement("li")
  // anchor.className = "nav-button";
  anchor.textContent = option.text;
  // <a>ofertas de la semana</a>
  anchor.href = option.linkTo;
  // <a href="/outlet.html">ofertas de la semana</a>

  //<li><a href="/outlet.html">ofertas de la semana</a></li>
  etiquetali.appendChild(anchor)

  navSelector.appendChild(etiquetali);
}

const footerSelector = document.querySelector("#footer");
// console.log(footerSelector);
const optionsFooter = [
  {
    text: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auriculares"],
  },
  {
    text: "Cómo Comprar",
    linkTo: "./how.html",
    opts: ["Formas de pago", "Envios", "Devoluciones"],
  },
  {
    text: "Costos y Tarifas",
    linkTo: "./taxs.html",
    opts: ["Impuestos", "Facturacion"],
  },
  {
    text: "Mis Pedidos",
    linkTo: "./orders.html",
    opts: ["Pedir Nuevamente", "Lista de Deseos"],
  },
  { text: "Garantía de Entrega", linkTo: "./orders.html", opts: ["", ""] },
  //   { text: "", linkTo: "./warranty.html" },
];

// for (let option of optionsFooter) {
//     const col = document.createElement("div");
//     col.classList.add("col");

//     const ul = document.createElement("ul");

//     const mainItem = document.createElement("li");
//     mainItem.classList.add("col-main-item");

//     const etiqa = document.createElement("a");
//     etiqa.href = option.linkTo;
//     etiqa.textContent = option.text;

//     mainItem.appendChild(etiqa);
//     ul.appendChild(mainItem);

//     //Agregar Hijos
//     option.opts.forEach(item => {
//         const lihijo = document.createElement("li");
//         const ahijo = document.createElement("a");

//         ahijo.href = "#";
//         ahijo.textContent = item;

//         lihijo.appendChild(ahijo);
//         ul.appendChild(lihijo);
//     });

//     col.appendChild(ul);
//     footerSelector.appendChild(col);

// }

let template = "";

for (let option of optionsFooter) {
    const subItems = option.opts.map(e => `<li><a href="#">${e}</a></li>`).join('');
    option = `
    <div class="col">
        <ul>
            <li class="col-main-item">
                <a href="${option.linkTo}">${option.text}</a>
            </li> 
            ${
                subItems
            }
        </ul>
    </div>
    `
    template = template + option
}

footerSelector.innerHTML = template;
