import Card from "../../components/card/Card";
import React from "react";
import "./product.css";

function Product({ products, title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">
      {products.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              info={item.info}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
