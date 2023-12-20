import React,{useEffect, useState} from 'react'
import {db} from './Config/firebase'
import { addDoc, collection } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductInfo from './ProductInfo';
const AddProduct = () => {
  const navigate=new useNavigate();
  const [isDataAdded, setIsDataAdded] = useState(false);
  const [record,SetRecord]=useState({
    Product_Name:"",
    Product_ID:"",
    Manufaturer_Name:"",
    Product_Description:"",
    Product_Quantity:"",
    Product_Price:""
  });
  let name,value;
  const HandleChange = (e) => {
     name=e.target.name;
     value=e.target.value;
    SetRecord({...record,[name]:value});
  }


    const HandleSubmit = () => {
    if (record.Product_ID === '') {
      return;
    } else {
      const coinIdRef = collection(db, `users','Products`);
      addDoc(coinIdRef, {
        Product_Name: record.Product_Name,
        Product_ID: record.Product_ID,
        Manufaturer_Name: record.Manufaturer_Name,
        Product_Description: record.Product_Description,
        Product_Quantity : record.Product_Quantity,
        Product_Price : record.Product_Price
      })
        .then(Response => {
          alert(`data added  SuccesFully`);
          setIsDataAdded(true);
        })
        .catch(console.error);
    }
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div style={{width:'500px'}}>
      <form onSubmit={(e) => { e.preventDefault(); HandleSubmit(); }}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter product name"
            name='Product_Name'
            value={record.Product_Name}
            onChange={HandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productID">Product ID</label>
          <input
            type="text"
            className="form-control"
            id="productID"
            placeholder="Enter product ID"
            name='Product_ID'
            value={record.Product_ID}
            onChange={HandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturerName">Manufacturer Name</label>
          <input
            type="text"
            className="form-control"
            id="manufacturerName"
            placeholder="Enter manufacturer name"
            name='Manufaturer_Name'
            value={record.Manufaturer_Name}
            onChange={HandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            className="form-control"
            id="productDescription"
            placeholder="Enter product description"
            name='Product_Description'
            value={record.Product_Description}
            onChange={HandleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="productQuantity">Product Quantity</label>
          <input
            type="number"
            className="form-control"
            id="productQuantity"
            placeholder="Enter product quantity"
            name='Product_Quantity'
            value={record.Product_Quantity}
            onChange={HandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productQuantity">Price(Per Unit)</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Enter product Price"
            name='Product_Price'
            value={record.Product_Price}
            onChange={HandleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      {isDataAdded && <ProductInfo record={record} />}
    </div>
  </div>
  )
}

export default AddProduct
