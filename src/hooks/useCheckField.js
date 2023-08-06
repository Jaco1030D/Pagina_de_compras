import { useMainContext } from '../context/MainContext';

export const useCheckField = () => {
  const [stateContext] = useMainContext();
  const checkField = () => {
    const keysUser = Object.keys(stateContext.user);
    const valuesUser = Object.values(stateContext.user);
    valuesUser.splice(-1, 1);
    keysUser.splice(-1, 1);
    const emptyFieldUser = valuesUser.some((v) => v === '');
    // console.log(keysUser, valuesUser);
    if (emptyFieldUser) {
      return 'preencha todos os campos do seus dados para proseguir';
    } else {
      try {
        keysUser.forEach((el) => {
          let value = stateContext.user[el];
          const func = eval(`${el}(value)`);
          if (!func.success) {
            throw func.error;
          }
        });
      } catch (error) {
        return error;
      }
    }
    return stateContext;
  };

  return { checkField };
};

const resultError = (message) => {
  const success = false;
  let error = message;
  return { success, error };
};

const name = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength < 2) {
    return resultError('O nome precisa ter pelo menos 2 caracteres');
  }
  if (!value.includes(' ')) {
    return resultError('Digite seu nome completo');
  }
  return { success, value };
};

const email = (value) => {
  let success = true;
  let re = /\S+@\S+\.\S+/;
  if (!re.test(value)) {
    return resultError('Tem que ser um e-mail valido');
  }
  return { success, value };
};

const number = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength < 11) {
    return resultError('O numero precisa ter o (DDD) + 9 numeros');
  }
  return { success, value };
};

const cpf = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength != 11) {
    return resultError('O Cpf precisa ter 11 numeros');
  }
  return { success, value };
};

const city = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength < 4) {
    return resultError('O nome da cidade precisa ter pelo menos 4 caracteres');
  }
  return { success, value };
};

const state = (value) => {
  let success = true;
  if (value === 'Selecione o estado') {
    return resultError('Selecione um estado');
  }
  return { success, value };
};

const cep = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength != 8) {
    return resultError('O Cep precisa ter 8 numeros');
  }
  return { success, value };
};

const road = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength < 4) {
    return resultError('A rua precisa ter pelo menos 4 caracteres');
  }
  return { success, value };
};

const neighborhood = (value) => {
  let success = true;
  const valueLength = value.length;
  if (valueLength < 4) {
    return resultError('O Bairro precisa ter pelo menos 4 caracteres');
  }
  return { success, value };
};
