import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
    .then((res) => setLista(res.data))
  })

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}/delete`)
  }

  

  return (
    <div>
      {
        lista.map((product, index) => {
          return (
            <div className='card' key={index}>
            <h4><Link to={'/products/' + product._id}>{product.title}</Link></h4>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button className='btn btn-danger w-25' onClick={() => deleteHandler(product._id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )


}

export default ProductList