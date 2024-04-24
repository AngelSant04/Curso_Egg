const productsSelector = document.getElementById("products");

createCard = (obj) => {
  let productsTemplate = `
    <article class="product-card">
        <a href="./details.html">
            <img
            class="product-img"
            src="assets/mock2.jpg"
            alt="Macbook Pro"
            />
            <div class="product-info">
                <span class="product-title">${obj.title}</span>
                <span class="product-description">${obj.description}</span>
                <div class="product-price-block">
                    <span class="price">${obj.price}</span>
                    <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">Incluye impuesto País ...</div>
            </div>
        </a>
    </article>
`;
  return productsTemplate;
};

// let productsTemplate = "";
// for (const element of products) {
//   productsTemplate = productsTemplate + createCard(element);
// }

// productsSelector.innerHTML = productsTemplate;

function printCards(arrayOfProducts, idSelector) {
  // productsSelector,innerHTML = "";
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = "";
  productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");
