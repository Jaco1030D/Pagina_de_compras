export const linkMenu = ['Home', 'New Arrivals', 'Sale', 'Contact'];
export const data = {
  title: 'Seus Dados',
  inputs: [
    {
      title: 'Nome completo',
      placeholder: 'Digite seu nome aqui...',
      name: 'name',
    },
    {
      title: 'E-mail',
      placeholder: 'Digite seu E-mail...',
      type: 'email',
      name: 'email',
    },
    {
      title: 'Numero de celular',
      placeholder: '(11) 912345678',
      type: 'number',
      name: 'number',
      max: 11,
    },
    {
      title: 'CPF',
      placeholder: '123.456.789-10',
      type: 'number',
      name: 'cpf',
      max: 11,
    },
    {
      title: 'Cidade',
      placeholder: 'Digite o nome da sua cidade...',
      name: 'city',
    },
    {
      grid: true,
      inputs: [
        {
          title: 'Estado',
          drop: true,
          estados: [
            'Selecione o estado',
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG',
            'PA',
            'PB',
            'PR',
            'PE',
            'PI',
            'RJ',
            'RN',
            'RS',
            'RO',
            'RR',
            'SC',
            'SP',
            'SE',
            'TO',
          ],
          name: 'state',
        },
        {
          title: 'Cep',
          type: 'number',
          placeholder: '07943-140',
          name: 'cep',
          max: 8,
        },
      ],
    },
    {
      title: 'Rua',
      placeholder: 'Digite a sua Rua...',
      name: 'road',
    },
    {
      grid: true,
      inputs: [
        {
          title: 'Bairro',
          placeholder: 'Digite o bairro...',
          name: 'neighborhood',
        },
        {
          title: 'Complemento',
          placeholder: 'Digite o complemento...',
          name: 'complement',
        },
      ],
    },
  ],
};
export const schedule = {
  title: 'Agendar entrega',
  input: [
    { title: 'Data', type: 'date', full: true, name: 'date' },
    {
      title: 'Observações ou comentarios',
      placeholder: 'Caso queira nos deixar mais informações',
      full: true,
      name: 'obs',
    },
  ],
};
export const payment = {
  title: 'Métodos de pagamento',
  input: ['Pix', 'Boleto', 'Cartão de credito'],
};
export const productsSelecteds = {
  title: 'Produtos selecionados',
  products: [
    {
      id: 4158,
      title: 'Avião',
      model: 'Modelo: Voador',
      price: '5,00',
      quant: 1,
      url: 'https://images.unsplash.com/photo-1621632361333-4649f0b59adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    },
    {
      id: 45858545,
      title: 'Radio',
      model: 'Modelo: Moderno',
      price: '5,00',
      quant: 2,
      url: 'data:image/jpeg;base64,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',
    },
  ],
  subtotal: {
    subtotal: 10,
    discount: 7,
  },
  total: {
    text: 'Confirmar Compra',
    value: 3,
  },
};
