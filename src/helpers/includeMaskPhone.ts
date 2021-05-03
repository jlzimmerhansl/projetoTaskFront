// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (maskedValue: string) =>
  maskedValue.replace(/^(\d{5})(\d{3})/, '$1-$2')
