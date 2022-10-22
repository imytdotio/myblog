import React from "react";

/**
 * @author
 * @function Product
 **/

const BuyOn = (props) => {
  const description = `${props.description.substring(0, 99)} ...`;
  return (
    <div className="border-2 border-gray-600 rounded-md m-2 p-2 w-full lg:w-5/12 inline-block">
      <img className='rounded-md shadow-xl mb-4 w-full'src={props.thumbnail_url} />
      <h1 className="mb-2 font-bold">{props.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="text-left"
      />
      <a
        className="gumroad-button mt-4"
        href={props.href}
        data-gumroad-overlay-checkout="true"
      >
        Buy on
      </a>
    </div>
  );
};

export default BuyOn;