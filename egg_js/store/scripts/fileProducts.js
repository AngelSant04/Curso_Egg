// captureText = () => {
//     console.log("capturando");
// }
// captureText = (event) => {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.value);
//     console.log(event.target.id);
// }
captureText = (event) => {
  const value = event.target.value;
  const productsFilter = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );
  return productsFilter
};

let searchSelector = document.querySelector("#search");

// searchSelector.addEventListener("keyup", captureText)
// searchSelector.addEventListener("keyup", event => captureText(event))

searchSelector.addEventListener("keyup", event => {
    const arrFilter = captureText(event);
    // console.log(arrFilter);
    printCards(arrFilter, "products")
})