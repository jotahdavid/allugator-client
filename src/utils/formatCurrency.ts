export default function formatCurrency(value: string | number): string {
  if (typeof value === 'string') {
    const onlyNumbers = Number(value.replace(/\D/g, ''));
    return formatCurrency(onlyNumbers);
  }

  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
