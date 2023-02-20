let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

function renderAverageCostPerDesigner(inventory) {
    // your code here

    let newArr = [];

    inventory.map(e =>{

      let suma = 0;
      let contador = 0;
      let obj = {
        name:"",
        averagePrice: 0,
    };

      e.shoes.map(x => {
        suma += x.price;
        contador += 1;
      })

      obj.name = e.name;

      obj.averagePrice = suma/contador;

      newArr.push(obj)

    })

    return newArr;
}

console.log(renderAverageCostPerDesigner(currentInventory));

/* SOLUCION DADA
function renderAverageCostPerDesigner(inventory) {
  let aux = [];
  inventory.map((e) => {
    let price = 0;
    let length = e.shoes.length;
    e.shoes.map((x) => {
      price += x.price;
    });
    aux.push({ name: e.name, averagePrice: price / length });
  });
  return aux;
}
*/