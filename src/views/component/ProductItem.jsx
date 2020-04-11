import React from "react";
import Cover from "./Cover";
import Text from "./Text";

const ProductItem = props => {
  const { dataProduct } = props;

  const renderItem = () => {
    return (
      <div className="row p-1 m-2 mb-5">
        <div className="col-4 p-0 pr-5 pr-md-5">
          <Cover cover={dataProduct} />
        </div>
        <div className="col-8 pl-5 pl-md-5 pr-5">
          <Text text = {dataProduct}/>
        </div>
      </div>
    );
  };

  return <div>{renderItem()}</div>;
};

export default ProductItem;
