import React from "react";
import "./Text.css";

const Text = props => {
  const { text } = props;
  const { author, title, review, desc, price, discount, stock } = text;

  let disc = price * (1 - discount / 100);
  return (
    <>
      <div className="penulis pt-4">{author}</div>
      <div className="judul">{title}</div>
      <div className="nilai">{review} / 5 Review</div>
      <div className="sinopsis pt-3 pb-3">{desc}</div>
      {discount > 0 ? (
        <div className="pricedisc pb-3">
          <div className="pricedisc-disc">${disc.toFixed(2)}</div>
          <div className="pricedisc-price">${price}</div>
        </div>
      ) : (
        <div className="pricedisc-price pb-3" style={{textDecoration: "none", fontWeight: "bold", color: "black"}}>${price}</div>
      )}
      {stock > 0 ? (
        <input type="button" value="BUY NOW" className="btn" />
      ) : (
        <input
          type="button"
          value="BUY NOW"
          className="btn"
          style={{
            backgroundColor: "gray",
            border: "1px solid gray",
            color: "white"
          }}
        />
      )}
    </>
  );
};
export default Text;
