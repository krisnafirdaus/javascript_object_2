let fruits = [
  {
    name: "Apple",
    scientificName: "Malus domestica",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Banana",
    scientificName: "Musa paradisiaca",
    clade: "Monocotyl",
    img:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Blueberry",
    scientificName: "Vaccinum corybosum",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Cherry",
    scientificName: "Prunus avium",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1528820600606-0ef5600cbfee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Melon",
    scientificName: "Cucumis metuliferus",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1582332205846-bf7627cae190?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Lemon",
    scientificName: "Citrus limon",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Mango",
    scientificName: "Mangifera indica",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Orange",
    scientificName: "Citrus sinesis",
    clade: "Dicotyl",
    img:
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  },
];

// console.log(fruits[2].name)

function fruitCards(fruit) {
  return `
    <div class="card">
           <div class="img" style="background-image:url('${fruit.img}');"></div>
           <div class="contain raleway">
               <div class="name">${fruit.name}</div>
               <div class="clad">${fruit.clade}</div>
               <div class="sciName">${fruit.scientificName}</div>
           </div>
       </div>
    </div>       
    `;
}

document.getElementsByClassName("container")[0].innerHTML = `${fruits
  .map(fruitCards)
  .join("")}`;
