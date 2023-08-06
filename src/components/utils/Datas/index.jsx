import { data } from '../../../const/Text';
import Input from '../Input';
import './styles.css';
import { useMainContext } from '../../../context/MainContext';

const Datas = () => {
  const [state, actions] = useMainContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    actions.userInsert({ [name]: value });
  };
  //   console.log(state.user);
  return (
    <div className="datas">
      <h1>{data.title}</h1>
      <form className="form">
        {data.inputs.map((data, index) => (
          <Input
            value={state.user[Object.keys(state.user)[index]]}
            index={index}
            handleChange={handleChange}
            key={index}
            data={data}
            values={state.user}
          />
        ))}
      </form>
    </div>
  );
};

export default Datas;
