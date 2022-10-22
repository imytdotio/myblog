import React from "react";

/**
 * @author
 * @function Product
 **/

const Product = (props) => {
  const description = `${props.description.substring(0, 99)} ...`;
  return (
    <div className="border-2 border-gray-600 rounded-md m-2 p-2 w-5/12 inline-block">
      <h1 className="mb-2 font-bold">{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-left"
      />
      <a
        class="gumroad-button"
        href={props.href}
        data-gumroad-overlay-checkout="true"
      >
        Buy on
      </a>
    </div>
  );
};

export default Product;
