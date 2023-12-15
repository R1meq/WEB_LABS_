import { getSearchShoes, refetchAll } from "./index.js";
import {updateShoes,deleteShoes} from "./api.js"

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
            <button id="delete-${id}" class="delete_button">
                delete
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
export const addItemsToPage = ({id, brand, price, size, color},onEdit) => {
    itemsConteiner.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, brand, price, size, color})
    );
    
    const deleteButton = document.getElementById(`delete-${id}`);
    const editButton = document.getElementById(`edit-${id}`);
    editButton.addEventListener("click" ,(e) => {
        itemsConteinerEdit.style.display = "flex";
        itemId = e.target.id.replace("edit-", "");
        fillInputs({brand,price,size,color});
    })

    deleteButton.addEventListener("click",(e) => {
        if (confirm("Do you want to delete item ?")) {
            itemId = e.target.id.replace("delete-","");
            deleteShoes(itemId).then(refetchAll);
        }
    })
};

saveButtonEdit.addEventListener("click",  (event) => {
    event.preventDefault();
    onEditItem(itemId);
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

const onEditItem = async (e) => {
    const itemId = e;

    const {brand, price, size, color} = getEditInputValues();
  
    clearInput();   

    updateShoes(itemId, {
        brand,
        price,
        size, 
        color}
    ).then(async (data) =>  {
        const newData = await data.json();
        renderItemsList(newData)
    });
};


