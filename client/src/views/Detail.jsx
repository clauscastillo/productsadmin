import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Detail = () => {
    const [product, setProduct] = useState({})
    const params = useParams();
    useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + params.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}/delete`)
        .then()
    }
    
    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button className='btn btn-danger w-25' onClick={() => deleteHandler(product._id)}><Link to={'/products'}>Delete</Link></button>
        </div>
    )
}


export default Detail