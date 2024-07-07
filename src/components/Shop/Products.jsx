import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItems from "../utilities/ProductItems";
import { productData } from "../../api";


const Products = ({ itemsPerPage }) => {
  const [productList, setProductList] = useState([]);
  productList.length = 51;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productList.length;
    setItemOffset(newOffset);
  };

  useEffect(()=>{
    productData().then((res) => {
      setProductList(res.data);
    }).catch((err) => {
      console.log(err);
    });
  },[])
  
  return (
    <>
      <section className="py-11">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 pt-8">
            {currentItems &&
              currentItems.map((item) => <ProductItems key={item.key} data={item}/>)}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="flex justify-center mt-10 gap-9 pagination-product"
          />
        </div>
      </section>
    </>
  );
};

export default Products;
