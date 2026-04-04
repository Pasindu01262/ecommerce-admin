import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

function ListProduct() {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/allproduct`);
        const data = await res.json();
        setAllproducts(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/removeproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id })   // FIXED
      });

      fetchInfo(); // Refresh list after deletion
    } catch (err) {
      console.error("Remove Error:", err);
    }
  };

  return (
    <div className='list-product'>
      <h1>All Product List</h1>

      <div className='listproduct-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className='listproduct-allproducts'>
        <hr />

        {allproducts.map((product) => (
          <div key={product._id}>
            <div className='listproduct-format-main listproduct-format'>
              <img src={product.image} alt='' className='litproduct-product-icon' />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>

              <img
                onClick={() => remove_product(product._id)}  // USING _id
                className='listproduct-remove-icon' 
                src={cross_icon}
                alt="remove"
              />
            </div>

            <hr />
          </div>
        ))}

      </div>
    </div>
  );
}

export default ListProduct;

