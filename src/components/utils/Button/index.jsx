import React, { useEffect, useState } from 'react';
import P from 'prop-types';
import { useMainContext } from '../../../context/MainContext';
import { useCheckField } from '../../../hooks/useCheckField';

const Button = ({ text }) => {
  const [state] = useMainContext();
  const { checkField } = useCheckField();
  const [full, setFull] = useState(true);
  const handleOnClick = () => {
    const res = checkField();
    console.log(res);
  };
  useEffect(() => {
    const valueUser = Object.values(state.user);
    const s = valueUser.splice(-1, 1);
    const emptyfield = valueUser.some((v) => v === '');
    // console.log(emptyfield);
    setFull(emptyfield);
  }, [state.user]);
  return (
    <button onClick={handleOnClick} className="btn" disabled={full}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string,
};
export default Button;
