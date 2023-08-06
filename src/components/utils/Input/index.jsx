import React from 'react';
import P from 'prop-types';
import './styles.css';

const Input = ({ index, data, handleChange, value, values }) => {
  return (
    <>
      {data.grid ? (
        <div className="input fracionado">
          {data.inputs.map((dado) => (
            <div key={dado.title} className="container">
              <label htmlFor={dado.title.toLowerCase()}>{dado.title}</label>

              {dado.drop ? (
                <select className="select" name={dado.name} onChange={handleChange}>
                  {dado.estados.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              ) : (
                <>
                  {dado.title === 'Complemento' ? (
                    <input
                      type={dado.type || 'text'}
                      name={dado.name}
                      placeholder={dado.placeholder || ''}
                      onChange={handleChange}
                      value={values.complement}
                      maxLength={dado.max || 100}
                    />
                  ) : (
                    <input
                      type={dado.type || 'text'}
                      name={dado.name}
                      placeholder={dado.placeholder || ''}
                      onChange={handleChange}
                      value={index === 5 ? values.cep : values.neighborhood}
                      maxLength={dado.max || 100}
                    />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={`input ${data.full ? 'full' : ''}`}>
          <label htmlFor={data.title.toLowerCase()}>{data.title}</label>

          <input
            type={data.type || 'text'}
            name={data.name}
            placeholder={data.placeholder}
            onChange={handleChange}
            value={index === 6 ? values.road : value}
            maxLength={data.max || 100}
          />
        </div>
      )}
    </>
  );
};

Input.propTypes = {
  data: P.object,
  handleChange: P.func,
  value: P.any,
  index: P.number,
  values: P.any,
};

export default Input;
