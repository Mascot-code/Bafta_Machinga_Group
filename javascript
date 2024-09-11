const openShopping = document.querySelector(".openshopping");
const closeShopping = document.querySelector(".closeshopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () =>{
    body.classList.add("active")
})
closeShopping.addEventListener("click", () =>){
    body.classList.remove("active")
}


let products = [
    {
        id: 1,
        name: "PRODUCT 1",
        image: "1.jpg",
        price: 2000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        image: "2.jpg",
        price: 2000
    },
    {
        id: 3,
        name: "PRODUCT 3",
        image: "3.jpg",
        price: 2500
    },
    {
        id: 4,
        name: "PRODUCT 4",
        image: "4.jpg",
        price: 3000
    },
    {
        id: 5,
        name: "PRODUCT 5",
        image: "5.jpg",
        price: 3500
    },
    {
        id: 6,
        name: "PRODUCT 6",
        image: "6.jpg",
        price: 4000
    },
]

let listCards = [];

const initApp = () => {
    products.forEach((value, key) =>{
        let newDiv = mentrouser.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = '
           <img src ="img/TSHS{value.images}">
           <div class ="title">TSHS{value.name}</div>
           <div class ="price">TSHS{value.price.toLocaleString()}</div>
           <button onclick ="addToCard(TSHS{kEY})"Add To Card></button>
        '
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = (key) => {
    if(listCards [key] == null){
        listCards[key] == JSON.stringify(products[key]);
        listCards[key].quantity = 1
    }

    reloadCard();
}
const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value 1= null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = '
            <div><img src ="img/TSHS{value.image}"></div>
            <div class ="cardTitle">TSHS{Value.name}</div>
            <div class ="cardPrice">TSHS{CSSMathValue.ptice.toLocaleString()}</div>

            <div>
           
            
            '
        }
    }
    )
}