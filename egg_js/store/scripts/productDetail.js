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

printDetails = (id) => {
  const product = products.find((e) => e.id == id)
  console.log(product);
  const codDetail = `
    <div class="product-images-block">
        <div class="thumbnail-container">
          <img src="../assets/mock1.jpg" alt="Descripción de la imagen 1" />
        </div>
        <div class="thumbnail-container">
          <img src="../assets/mock2.jpg" alt="Descripción de la imagen 2" />
        </div>
        <div class="mainimage">
          <img src="../assets/mock1.jpg" alt="Descripción de la imagen 1" />
        </div>
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1>
        <form class="selector">
          <fieldset>
            <label class="label" for="color">Color</label>
            <select type="text" placeholder="Selecciona un color">
            ${
              product.colors.map((e) => `<option value="${e}">${e}</option>`)
            }
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
            <input type="number" value="1" />
            <button class="btn-primary">Comprar</button>
            </div>
            <div class="bottom">
            <button class="btn-outline">Añadir al Carrito</button>
            </div>
        </div>
      </div>
    </div>
  `;

  const productDetail = document.querySelector("#contenedordetail");
  productDetail.innerHTML = ""
  productDetail.innerHTML = codDetail;
};

const params = new URLSearchParams(location.search);
const idUrl = params.get("id");

printDetails(idUrl);
