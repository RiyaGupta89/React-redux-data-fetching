import React from 'react'
import {useSelector} from "react-redux"

function ProductComponent() {
    const products = useSelector((state) => state.products.products)
    console.log(products)
    return (
        <div>
            <h1>ProductComponent</h1>
        </div>
    )
}

export default ProductComponent
