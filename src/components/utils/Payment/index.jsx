import { payment } from '../../../const/Text';
import './style.css';
import { useMainContext } from '../../../context/MainContext';
const Payment = () => {
  const [state, actions] = useMainContext();

  const handleChange = (e) => {
    const { value } = e.target;
    actions.payment({ payment: value });
    // console.log(name, value);
  };
  //   const [paymentMethod, setPaymentMethod] = useState('Pix');

  //   const handleOnChange = (e) => {
  //     const { value } = e.target;
  //     console.log(value);
  //     setPaymentMethod(value);
  //   };
  return (
    <div>
      <h1>{payment.title}</h1>
      <form className="form-payment">
        {payment.input.map((input) => (
          <label key={input}>
            <input
              className="radio"
              type="radio"
              name={input}
              onChange={handleChange}
              value={input}
              checked={state.payment === input}
            />
            {input}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Payment;
