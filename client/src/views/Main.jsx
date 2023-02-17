import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
  return (
    <div>
      <h1>Product Administrator</h1>
      <ProductForm/>
      <ProductList/>
    </div>
  )
}