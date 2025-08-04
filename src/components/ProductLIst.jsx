import React from 'react'
import "./component.css"

const ProductLIst = (props) => {
    const { products, onAddToCart } = props;

    return (
        <>
            <h2>Products</h2>
            <div className='product-catlog-wrapper'>
                {products.map((product) => {
                    return (
                        <div key={product.sku} className='product-wrapper'>
                            <div>
                                {product.name}
                            </div>
                            <div>
                                {product.price}
                            </div>
                            <button onClick={() => onAddToCart(product)}> Add to cart</button>

                        </div>
                    )
                })}
            </div>
        </>
    ) 
}

export default ProductLIst