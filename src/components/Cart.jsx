import React from 'react'

const Cart = (props) => {
    const { cartItems, total } = props;
    const uniqueCartItems = [...new Set(cartItems)];
    return (
        <>
            <h2>Cart</h2>
            {uniqueCartItems.map((item) => {
                return (
                    <div key={item.sku}>
                        {item.name}
                    </div>
                )
            })}
            <h4>Total: {total}</h4>
        </>
    )
}

export default Cart