import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import config from '../config'
/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  var GUMROAD_BEARER = config.GUMROAD_BEARER;
  var GUMROAD_LONG = config.GUMROAD_LONG;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", GUMROAD_BEARER );
    myHeaders.append("Cookie", GUMROAD_LONG);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.gumroad.com/v2/products", requestOptions)
      .then((response) => response.text())
      .then((result) => setProducts(JSON.parse(result).products))
      .catch((error) => console.log("error", error));

    // console.log(products.products[1]);
  }, []);

  return (
    <div className="">
      <h1>Products</h1>
      {products.map((product) => {
        return (
          <Product
            href={`https://imyt.gumroad.com/l/${product.custom_permalink}`}
            title={product.name}
            description={product.description}
          />
        );
      })}
      {/* <Product
        href="https://imyt.gumroad.com/l/5am"
        title="5am"
        description="Lorem Ipsum"
      />
      <Product
        href="https://imyt.gumroad.com/l/planner"
        title="Planner"
        description="Lorem Ipsum"
      /> */}
      {/* <div className=" w-1/2 inline-block h-screen p-4">
        <div class="gumroad-product-embed">
          <a href="https://imyt.gumroad.com/l/planner">Loading...</a>
        </div>
      </div>
      <div className=" w-1/2 inline-block h-screen p-4 overflow-auto">
        <div class="gumroad-product-embed">
          <a href="https://imyt.gumroad.com/l/5am">Loading...</a>
        </div>
      </div> */}
    </div>
  );
};

export default Products;
