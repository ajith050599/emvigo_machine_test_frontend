import './App.css'
import { useState } from 'react';
import ProductLIst from './components/ProductLIst';
import Cart from './components/Cart';
import { products } from './data/ProductData';
import { Checkout, pricingRules } from './utils/Checkout';

function App() {
  const [checkout] = useState(new Checkout(pricingRules));
  const [cartItems, setCartItems] = useState(checkout.getCart());
  const [total, setTotal] = useState(0);
  const addToCart = (product) => {
    checkout.scan(product);
    setCartItems([...checkout.getCart()])
    setTotal(checkout.CartTotal())

  }
  return (
    <>
      <div>
        <h1>Emvigo Product catalog</h1>
        <br />
        <div className='product-page-wrapper'>
          <ProductLIst products={products} onAddToCart={addToCart} />
          <br />
          <Cart cartItems={cartItems} total={total} />
        </div>
      </div>

    </>
  )
}

export default App
