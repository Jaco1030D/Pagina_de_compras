import React from 'react';
import './styles.css';
import vector from './img/Vector 3.svg';
import handbag from './img/Bolsinha.png';
import menu from './img/menu.png';
import { linkMenu } from '../../../const/Text';

const Navbar = () => {
  return (
    <nav id="navbar">
      <img src={vector} alt="vector" id="logo" />
      <ul className="list">
        {linkMenu.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <div className="icons">
        <img src={handbag} alt="Bolsa" id="bolsa" />
        <img src={menu} alt="menu" id="img" />
      </div>
    </nav>
  );
};

export default Navbar;
