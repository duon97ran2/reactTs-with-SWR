export const CurrencyConvert = (text: any) => {
  return text.toLocaleString("de-DE", { style: 'currency', currency: 'VND' })
}