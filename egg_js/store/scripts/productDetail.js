// const query = location.search;
// console.log(query);
// const params = new URLSearchParams(query);
// console.log(params);
// const id = params.get('id');
// console.log(id);
// params.append("idextra","extra")
// console.log(params.get('idextra'));
// params.delete("idextra")
// console.log(params.get('idextra'));
// console.log("Existe id: ", params.has('id'));
let subtotal = 1000;
printDetails = (id) => {
  const product = products.find((e) => e.id == id);
  // console.log(product);
  
  const codDetail = `
    <div class="product-images-block">
        <div class="thumbnail-container">
          <img src="../assets/mock1.jpg" alt="Descripción de la imagen 1"/>
        </div>
        <div class="thumbnail-container">
          <img src="../assets/mock2.jpg" alt="Descripción de la imagen 2"/>
        </div>
        <div class="mainimage">
          <img id="bigImg" src="../assets/mock1.jpg" alt="Descripción de la imagen 1" onClick="changeMini(event)" />
        </div>
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1>
        <form class="selector">
          <fieldset>
            <label class="label" for="color">Color</label>
            <select id="color-${id}" type="text" placeholder="Selecciona un color">
            ${product.colors.map((e) => `<option value="${e}">${e}</option>`)}
            </select>
          </fieldset>
        </form>
        <div class="description">
          <h1>Descripcion:</h1>
          <p>
              ${product.description}
          </p>
        </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 class="checkout-total-price">$${product.price}</h2>
        <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
            <li>
            <span class="policy-icon"
                ><img src="../assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
            >
            </li>
            <li>
            <span class="policy-icon"
                ><img src="../assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
            >
            </li>
        </ul>
        <div class="checkout-process">
            <div class="top">
              <input type="number" value="1" id="quantity-${id}" onChange="changeSubTotal(event)"/>
              <button class="btn-primary">Comprar</button>
            </div>
            <div class="bottom">
            <button class="btn-outline" id="subtotalTexto" onClick="saveProduct(event)">Añadir al Carrito: ${subtotal}</button>
            </div>
        </div>
      </div>
    </div>
  `;

  const productDetail = document.querySelector("#contenedordetail");
  productDetail.innerHTML = "";
  productDetail.innerHTML = codDetail;
};

const params = new URLSearchParams(location.search);
const idUrl = params.get("id");


printDetails(idUrl);

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = selectedSrc;
  // console.log(bigSelector.src);
}


function changeSubTotal(event) {
  // console.log(event.target.value);
  let cantidadComprar = event.target.value;
  const productEncontrado = products.find(e => e.id == idUrl)
  // console.log(productEncontrado);
  subtotal = productEncontrado.price * cantidadComprar;
  const textSubtotal = document.querySelector("#subtotalTexto");
  // console.log(textSubtotal);
  textSubtotal.textContent = ""
  textSubtotal.textContent = `Añadir al Carrito: ${subtotal}`

  // console.log("Subtotal -> ", (productEncontrado.price * cantidadComprar));
}

const saveProduct = (event) => {
  const productEncontrado = products.find(e => e.id == idUrl)
  const product = {
    id: idUrl,
    title: productEncontrado.title,
    price: productEncontrado.price,
    image: productEncontrado.images[0],
    color: document.querySelector("#color-" + idUrl).value,
    quantity: document.querySelector("#quantity-" + idUrl).value,
  };

  const arrLocal = JSON.parse(localStorage.getItem("cart"))

  if (arrLocal == null) {
    const arrAux = []
    arrAux.push(product)
    localStorage.setItem("cart",JSON.stringify(arrAux))
  } else {
    if (!arrLocal.some(e => e.id == idUrl)) {
      arrLocal.push(product)
      localStorage.setItem("cart", JSON.stringify(arrLocal));
    }
  }
  

  


  // const stringifyProduct = JSON.stringify(product);
  // const objLocal = localStorage.getItem("cart")
  // console.log(objLocal);


  // localStorage.setItem("cart", stringifyProduct);
}
