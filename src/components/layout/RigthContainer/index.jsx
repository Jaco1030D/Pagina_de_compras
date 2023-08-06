import React from 'react';
import './style.css';
import { productsSelecteds } from '../../../const/Text';
import Products from '../../utils/Products';
import Prices from '../../utils/Prices';

const RigthContaier = () => {
  return (
    <div className="rigth-container">
      <h1>{productsSelecteds.title}</h1>
      <div className="content">
        <Products />
        <Prices />
      </div>
    </div>
  );
};

export default RigthContaier;
