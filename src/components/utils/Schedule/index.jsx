import React from 'react';
import { schedule } from '../../../const/Text';
import Input from '../Input';
import './style.css';
import { useMainContext } from '../../../context/MainContext';

const Schedule = () => {
  const [state, actions] = useMainContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    actions.schedule({ [name]: value });
    // console.log(name, value);
  };
  return (
    <div className="schedule">
      <h1>{schedule.title}</h1>
      <form className="form-schedule">
        {schedule.input.map((input, index) => (
          <Input
            handleChange={handleChange}
            value={state.schedule[Object.keys(state.schedule)[index]]}
            key={index}
            data={input}
          />
        ))}
      </form>
    </div>
  );
};

export default Schedule;
