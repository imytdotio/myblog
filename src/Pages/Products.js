import React, { useState, useEffect } from "react";
import BuyOn from "../Components/BuyOn";
import config from "../config";
/**
 * @author
 * @function Products
 **/

const Products = (props) => {
  var GUMROAD_BEARER = config.GUMROAD_BEARER;
  var GUMROAD_LONG = config.GUMROAD_LONG;

  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    setIsPending(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", GUMROAD_BEARER);
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
    setIsPending(false);
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      {isPending && <p>Loading...</p>}
      {products &&
        products.map((product) => {
          return (
            <BuyOn
              key={product.id}
              href={product.short_url}
              title={product.name}
              description={product.description}
              thumbnail_url={product.thumbnail_url}
            />
          );
        })}
    </div>
  );
};

export default Products;