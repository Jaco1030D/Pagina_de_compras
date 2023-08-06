import React from 'react';
import './styles.css';
import Datas from '../../utils/Datas';
import Schedule from '../../utils/Schedule';
import Payment from '../../utils/Payment';

const LeftContainer = () => {
  return (
    <div className="left-container">
      <Datas />
      <Schedule />
      <Payment />
    </div>
  );
};

export default LeftContainer;
