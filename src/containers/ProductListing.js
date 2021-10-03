import React from 'react'
import axios from 'axios'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setproducts } from "../redux/actions/productActions"
import {useSelector} from "react-redux"
import "./ProductListing.css"

function ProductListing() {

    const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)

    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=> {
            console.log(err)
        })
        dispatch(setproducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
        <h1 className="heading">Fetching products and rendering using Redux</h1>
        {loading ? <h1>Loading....</h1> : ''}
        <div className="card-container">
            {products.map(product=> {
                const {id, title, price, category, image} = product;
                return(


                  <div className="card" key={id}>
                    <div className="image-containe">
                        <img src={image} width="280px" height="300px" alt={id} />
                    </div>
                    <div className="content">
                        <h4>{title}</h4>
                        <span>$ {price}</span>
                        <span>{category}</span>
                    </div>
                  </div>
                )
            })}
        </div>
        </>
    )
}

export default ProductListing
