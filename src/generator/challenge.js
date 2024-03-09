import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function* anotherFunction(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );

    //Se utiliza yield para dar una pausa a la ejecucion y utilizamos .next() para dar inicio a el codigo
    yield console.log(products);
    yield console.log(product.title);
    yield console.log(category.name);
  } catch (error) {
    console.error(error);
  }
}

const g = anotherFunction(API);
g.next().value;
g.next().value;
g.next().value;
