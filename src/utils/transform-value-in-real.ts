export const TransformValueInReal = (value : number) => value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }) 