import useProduct from '../hooks/useProduct';
import useCart from '../hooks/useCart';
import { ReactElement } from 'react';
import Product from './Product';

const ProductList = () => {
  
  const {dispatch,REDUCER_ACTIONS,cart}=useCart();
  const {products}=useProduct();


  let pageContent:ReactElement|ReactElement[]=<p>Loading...</p>

  // setTimeout(() =>  {
    if(products?.length){
    pageContent=products.map(product => {
      const inCart:boolean=cart.some(item => item.sku === product.sku)

      return (
        <Product 
        key={product.sku}
        product={product}
        dispatch={dispatch}
        REDUCER_ACTIONS={REDUCER_ACTIONS}
        inCart={inCart}
        />
      )
    })
  }
// },3000)

  const content=(
    <main className="main main--products">
      {pageContent}
    </main>
  )
  return content;
}

export default ProductList