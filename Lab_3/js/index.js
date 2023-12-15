import { addItemsToPage, clearInput, getInputValues, renderItemsList } from "./dom_until.js";


const searchButton = document.getElementById("search_button");
const sortButton = document.getElementById("sort_button");
const totalAmoundButton = document.getElementById("total-amount_button");
const searchInput = document.getElementById("search_input");
const submitButton = document.getElementById("submit_button");

let shoes = [];
let searchShoes = shoes;

const addItem = ({brand, price, size, color}) => {
    const newItem = {
        brand,
        price,
        size,
        color,
    };

    shoes.push(newItem);

    addItemsToPage(newItem);
}

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {brand, price, size, color} = getInputValues();

    clearInput();

    addItem({
        brand,
        price,
        size,
        color,
    });
});


searchButton.addEventListener("click",() => {
    searchShoes = shoes.filter(item => item.brand.toLowerCase().search(searchInput.value.toLowerCase()) !== -1);

    renderItemsList(searchShoes);
});

sortButton.addEventListener("click", () => {

    const comparator = (a,b) => {
        const sortOption = document.getElementById("select_option");
        const value = sortOption.value; 

        switch(value) {
            case "1": 
                return a.brand.localeCompare(b.brand);
            case "2":
                return a.price - b.price;
            case "3":
                return a.size - b.size;
            case "4":
                return a.color.localeCompare(b.color);
        }
    }

    renderItemsList(shoes.sort((a, b) => comparator(a, b)));
});


totalAmoundButton.addEventListener("click", () => {
    let totalprice = 0

    searchShoes.forEach((item) => {
        totalprice += Number(item.price);
    });

    const totalElement = document.querySelector(".total"); 

    totalElement.innerHTML = `<div class="total">$${totalprice}</div>`;
});


