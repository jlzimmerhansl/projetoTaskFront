export function cnpj(event: React.FormEvent<HTMLInputElement>) {
  let value = event.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/, '$1.$2')
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')
  event.currentTarget.value = value
  return value
}

export function phone(event: React.FormEvent<HTMLInputElement>) {
  let value = event.currentTarget.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  event.currentTarget.value = value
  return value
}
