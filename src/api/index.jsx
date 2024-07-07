import axios from 'axios';

const productData = ()=>{
    try{
        const data = axios.get("https://api.escuelajs.co/api/v1/products");
        return data;
    }catch(err){
        return err;
    }
}

export {productData}