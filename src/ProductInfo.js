import React from 'react';
import Barcode from 'react-barcode';

const ProductInfo = (props) => {
  if (!props) {
    {
        console.log(props);
    }
    return <p>No product data available</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product Details</h2>
      <div className="row">
        <div className="col-md-6">
          <p className="mb-2"><strong>Product Name:</strong> {props.record.Product_Name}</p>
          <p className="mb-2"><strong>Product ID:</strong> {props.record.Product_ID}</p>
          <p className="mb-2"><strong>Manufacturer:</strong> {props.record.Manufaturer_Name}</p>
          <p className="mb-2"><strong>Quantity:</strong> {props.record.Product_Quantity}</p>
          <p className="mb-2"><strong>Price:</strong> {props.record.Product_Price}</p>
        </div>
        <div className="col-md-6">
          <Barcode value={props.record.Product_ID} />
        </div>
      </div>
      <div className="container mt-5">
      <h2 className="mb-4 ml-5">E-Commerce Listing</h2>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Amazon</h5>
          <a href="#" className="btn btn-primary">Upload</a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Flipkart</h5>
          <a href="#" className="btn btn-primary">Upload</a>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Indiamart</h5>
          <a href="#" className="btn btn-primary">Upload</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductInfo;
