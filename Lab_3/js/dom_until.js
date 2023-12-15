const brandInput = document.getElementById("brand_input");
const PriceInput = document.getElementById("price_input");
const sizeInput = document.getElementById("size_input");
const colorInput = document.getElementById("color_input");
const itemsConteiner = document.getElementById("items_conteiner");

const itemTemplate = ({brand, price, size, color}) =>  {
  return  `
    <li id="item-id" class="item">
        <img src="images/shoes-svgrepo-com.svg" alt="" class="image">
        <div class="card_body">
            <h5 class="brand_title">brand: ${brand}</h5>
            <h5 class="price_title">price: ${price}₴</h5>
            <h5 class="size_title">size: ${size}</h5>
            <h5 class="color_title">color: ${color}</h5>
        </div>
    </li> `;
};

export const clearInput = () => {
    brandInput.value = "";
    PriceInput.value = "";
    sizeInput.value = "";
    colorInput.value = "";
};

export const addItemsToPage = ({brand, price, size, color}) => {
    itemsConteiner.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({brand, price, size, color})
    );
};

export const renderItemsList = (items) => {
    itemsConteiner.innerHTML ="";

    for(const item of items) {
        addItemsToPage(item);
    }
};

export const getInputValues = () => {
    return {
        brand:brandInput.value,
        price:PriceInput.value,
        size:sizeInput.value,
        color:colorInput.value,
    };
};