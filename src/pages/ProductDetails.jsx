import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/utilities/BreadCrumb";
import Details from "../components/ProductDetails/Details";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import { useParams } from "react-router-dom";
import { productData } from "../api";

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const [relatedProductList, setRelatedProductList] = useState([])
  const params = useParams()
  useEffect(()=>{
    productData().then((res) => {
      for(let item of res.data){
        if(item.id == params.id){
          setProduct(item);  
          for(let releted of res.data){
            if(item.category.name == releted.category.name){
              setRelatedProductList((prev)=> [...prev, releted])
            }      
          }
        }
      }
    }).catch((err) => {
      console.log(err);
    });
  },[params.id])

  return (
    <section>
      <div className="py-8 bg-third">
        <BreadCrumb title={product?.title}/>
      </div>
      <Details data={product}/>
      <RelatedProducts propducts={relatedProductList}/>
    </section>
  );
};

export default ProductDetails;
