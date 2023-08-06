import React, { useEffect, useState } from 'react';
import './styles.css';
import { useMainContext } from '../../../context/MainContext';

const Products = () => {
  const [state, actions] = useMainContext();
  //   const [products, setProducts] = useState(productsSelecteds.products);
  const handleClick = (e, product) => {
    const value = e.target.innerHTML;
    const idProduct = product.id;
    let valueQuant = product.quant;
    let price = product.price;
    if (value == '-') {
      valueQuant = product.quant - 1;
      price = -product.price;
    } else {
      valueQuant = product.quant + 1;
      price = +product.price;
    }
    const productUpdate = {
      ...product,
      quant: valueQuant,
      price: Math.abs(price),
    };
    const newProducts = state.products.map((product) => {
      if (product.id === idProduct) {
        return productUpdate;
      } else {
        return product;
      }
    });
    actions.updateQuant({ products: newProducts });
  };
  useEffect(() => {
    const res = state.products.map((product) => {
      let productPrice;
      productPrice = +product.price * product.quant;
      return productPrice;
    });
    let subtotal = res[0] + res[1];
    let total = subtotal - state.subtotal.discount;
    actions.updateTotal({ value: total < 0 ? 0 : total });
    actions.updateSubtotal({ subtotal });
  }, [state.products, actions, state.subtotal.discount]);
  return (
    <div className="products">
      {state.products.length > 0 &&
        state.products.map((product, index) => (
          <div key={index} className="product" style={{ display: product.quant === 0 && 'none' }}>
            <div className="cont">
              <img src={product.url} alt={product.title} height="83px" />
              <div className="infos">
                <p className="title-product">{product.title}</p>
                <p className="model-product">{product.model}</p>
                <p className="price-product">R${parseInt(product.price) * product.quant}</p>
              </div>
            </div>
            <div className="quant">
              <button onClick={(e) => handleClick(e, product)}>-</button>
              {product.quant}
              <button onClick={(e) => handleClick(e, product)}>+</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
