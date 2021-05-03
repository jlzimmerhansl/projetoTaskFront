// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (maskedValue: string) =>
  maskedValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
