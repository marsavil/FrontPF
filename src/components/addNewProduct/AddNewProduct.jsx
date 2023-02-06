import React from 'react'
import './addNewProduct.css'
import { Link } from 'react-router-dom';

export const addNewProduct = () => {
  return (
    <Link to ='form' >
    <div className='button-container'>
        <button className='addButton'>Add a new product</button>
    </div>
    </Link>
  )
}

export default addNewProduct;