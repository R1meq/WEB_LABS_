import { getSearchShoes, getShoes} from "./index.js";

const brandInput = document.getElementById("brand_input");
const PriceInput = document.getElementById("price_input");
const sizeInput = document.getElementById("size_input");
const colorInput = document.getElementById("color_input");
const itemsConteiner = document.getElementById("items_conteiner");

const itemsConteinerEdit = document.getElementById("edit_conteiner");
const brandInputEdit = document.getElementById("brand_input_edit");
const PriceInputEdit = document.getElementById("price_input_edit");
const sizeInputEdit = document.getElementById("size_input_edit");
const colorInputEdit = document.getElementById("color_input_edit");
const saveButtonEdit = document.getElementById("save_button");


const itemTemplate = ({id,brand, price, size, color}) =>  {
  return  `
    <li id="${id}" class="item">
        <img src="images/shoes-svgrepo-com.svg" alt="" class="image">
        <div class="card_body">
            <h5 class="brand_title">brand: ${brand}</h5>
            <h5 class="price_title">price: ${price}₴</h5>
            <h5 class="size_title">size: ${size}</h5>
            <h5 class="color_title">color: ${color}</h5>
            <button id="edit-${id}" class="edit_button">
                    Edit
            </button>
        </div>
    </li> `;
};


export const clearInput = () => {
    brandInput.value = "";
    PriceInput.value = "";
    sizeInput.value = "";
    colorInput.value = "";
};

let itemId = null;
export const addItemsToPage = ({id, brand, price, size, color}) => {
    itemsConteiner.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, brand, price, size, color})
    );
    
    const editButton = document.getElementById(`edit-${id}`);
    editButton.addEventListener("click" ,(e) => {
        itemsConteinerEdit.style.display = "flex";
        itemId = e.target.id.replace("edit-", "");
        console.log(itemId);
        fillInputs({brand,price,size,color});
    })
};

saveButtonEdit.addEventListener("click",  (event) => {
    event.preventDefault();
    onEditItem()
    itemsConteinerEdit.style.display = "none";
})

export const renderItemsList = (items) => {
    itemsConteiner.innerHTML ="";


    for (const item of items) {
        addItemsToPage(item);
    }
};

export const getInputValues = () => {
    if (brandInput.value.trim() === "" || (PriceInput.value === "" || PriceInput.value<=0) ||
    sizeInput.value === "" || sizeInput.value<=20||colorInput.value.trim() === "" ) {
        alert("fields need to be correct and filled");
        return;
    }
      
    return {
        brand:brandInput.value,
        price:PriceInput.value,
        size:sizeInput.value,
        color:colorInput.value,
    };
};

export const getEditInputValues = () => {

    if (brandInputEdit.value.trim() === "" || PriceInputEdit.value === "" || PriceInputEdit.value<=0 ||
    sizeInputEdit.value === "" || sizeInputEdit.value<=20 || colorInputEdit.value.trim() === "" ) {
        alert("fields need to be correct and filled");
        return;
    }  

    return {
        brand:brandInputEdit.value,
        price:PriceInputEdit.value,
        size:sizeInputEdit.value,
        color:colorInputEdit.value,
    };
    
};


const fillInputs = ({brand, price, size, color}) => {
    brandInputEdit.value = brand;
    PriceInputEdit.value = price;
    sizeInputEdit.value = size;
    colorInputEdit.value = color;
}

const onEditItem =  () => {
    let editItem = getShoes().find(item => item.id === itemId);

    if(editItem) {
        const {brand, price, size, color} = getEditInputValues();
        editItem.brand = brand;
        editItem.price = price;
        editItem.size = size;
        editItem.color = color;
    }

    renderItemsList(getSearchShoes());
};


