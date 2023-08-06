import React from 'react';
import './styles.css';
import Button from '../Button';
import { useMainContext } from '../../../context/MainContext';

const Prices = () => {
  const [state] = useMainContext();
  return (
    <div className="prices">
      <div className="line"></div>
      <div className="infos-payment">
        <div className="line-itens">
          <p>Subtotal</p>
          <p>R${state.subtotal.subtotal}</p>
        </div>
        <div className="line-itens">
          <p>Cupom de Desconto</p>
          <p>R${state.subtotal.discount}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="total">
        <div className="line-itens">
          <p>Total(R$)</p>
          <p>R${state.total.value}</p>
        </div>
        <Button text={state.total.text} />
      </div>
    </div>
  );
};

export default Prices;
