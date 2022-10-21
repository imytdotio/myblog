import React from "react";

/**
 * @author
 * @function Product
 **/

const Product = (props) => {
  return (
    <div className="border-2 border-gray-600 rounded-md m-2 p-2 w-5/12 inline-block">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a class="gumroad-button" href={props.href} data-gumroad-overlay-checkout="true">
        Buy on
      </a>
    </div>
  );
};

export default Product;
