import { clearInput, getInputValues, renderItemsList } from "./dom_until.js";
import { postShoes, getAllShoes,} from "./api.js";

const searchButton = document.getElementById("search_button");
const sortButton = document.getElementById("sort_button");
const totalAmoundButton = document.getElementById("total-amount_button");
const searchInput = document.getElementById("search_input");
const submitButton = document.getElementById("submit_button");
const cancelButton = document.getElementById("cancel_button");

let Shoes = [];
let searchShoes = Shoes;

export const getShoes = () => {
    return Shoes;
}

export const getSearchShoes = () => {
    return searchShoes;
}

export const refetchAll = async () => {
    const all  = await getAllShoes();
    
    Shoes = all;

    renderItemsList(Shoes);
}


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {brand, price, size, color} = getInputValues();

    clearInput();

    postShoes(
        {brand,price,size,color}
    ).then(refetchAll)
});


searchButton.addEventListener("click",() => {
    searchShoes = Shoes.filter(item => item.brand.toLowerCase().search(searchInput.value.toLowerCase()) !== -1);

    renderItemsList(searchShoes);
});

sortButton.addEventListener("click", () => {

    const comparator = (a,b) => {
        const sortOption = document.getElementById("select_option");
        const value = sortOption.value; 

        switch(value) {
            case "1": 
                return b.brand.localeCompare(a.brand);
            case "2":
                return a.price - b.price;
            case "3":
                return a.size - b.size;
            case "4":
                return b.color.localeCompare(a.color);
        }
    }

    renderItemsList(Shoes.sort((a, b) => comparator(a, b)));
});


totalAmoundButton.addEventListener("click", () => {
    let totalprice = 0

    searchShoes.forEach((item) => {
        totalprice += Number(item.price);
    });

    const totalElement = document.querySelector(".total"); 

    totalElement.innerHTML = `<div class="total">$${totalprice}</div>`;
});

cancelButton.addEventListener("click", () => {
    renderItemsList(Shoes);
    searchShoes = Shoes;

    searchInput.value = "";
});

refetchAll();


