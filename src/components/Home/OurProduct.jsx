import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItems from "../utilities/ProductItems";
import { productData } from "../../api";

const OurProduct = () => {
  const [productList, setProductList] = useState([]);
  useEffect(()=>{
    productData().then((res) => {
      setProductList(res.data);
    }).catch((err) => {
      console.log(err);
    });
  },[])

  productList.length = 12;

  return (
    <section className="pb-16">
      <div className="container">
        <h2 className="title text-center">Our Products</h2>
        <div className="grid grid-cols-4 gap-8 pt-8">
          {
            productList.map((item)=>(
              <ProductItems data={item} key={item.id}/>
            ))
          }
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/shop"
            className="text-brand text-base font-primary font-bold py-3 px-[78px] inline-block border-2 border-brand"
          >
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
