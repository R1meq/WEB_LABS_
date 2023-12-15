import axios from "axios";

const BASE_URL =  'http://localhost:8080/catalog';

  
export async function getAllShoesRequset() {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getFilteredShoes({ color, type, title }) {    
    try {
      const response = await axios.get(BASE_URL, {
        params: {
                ...(color != 'Color' && color !='color' && { color: color}),
                ...(type != 'Type' && type != 'type' && { type: type }),
                ...(title && { title: title }),
        },
      });
  

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function getFetchData(color,type,title) {

    if(color === 'color' && type === 'type' && title === '') {
        return getAllShoesRequset();
    } else {
        return getFilteredShoes({color:color,type:type,title:title});
    }
}

export async function getShoesById(id) {
    try {
        console.log({id})
        const response = await axios.get(`${BASE_URL}/shoe/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


// console.log(10);