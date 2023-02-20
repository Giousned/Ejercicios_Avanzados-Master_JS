let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {

  let newArr = [];
  let newArrFinal = [];

  shoeList.map(e =>{

    newArr = [];

    e.shoes.map(x => {

      if (x.name.includes("black")) newArr.push(e.name,x.name,x.price)

    })

    if (newArr.length === 0) return newArrFinal = [];
    else newArrFinal.push(newArr);

  })

  return newArrFinal;
}

console.log(renderInventory(inventory));

/* SOLUCION DADA
function renderInventory(shoeList) {
  let newListOfBlack = []
  shoeList.map((item, index)=>{
      item.shoes.map((item2, index)=>{
          if (item2.name.includes("black")) newListOfBlack.push([item.name,item2.name, item2.price])
      })
  })
  return newListOfBlack;
}
*/