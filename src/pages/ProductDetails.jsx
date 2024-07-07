import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/utilities/BreadCrumb";
import Details from "../components/ProductDetails/Details";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import { useParams } from "react-router-dom";
import { productData } from "../api";

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  useEffect(()=>{
    productData().then((res) => {
      for(let item of res.data){
        if(item.id == params.id){
          setProduct(item);    
        }       
      }
    }).catch((err) => {
      console.log(err);
    });
  },[])
  return (
    <section>
      <div className="py-8 bg-third">
        <BreadCrumb />
      </div>
      <Details data={product}/>
      <RelatedProducts />
    </section>
  );
};

export default ProductDetails;
