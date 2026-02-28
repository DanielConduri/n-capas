export const validateIdentification = (cedula: string) => {
    if (!/^\d{10}$/.test(cedula)) return false

  const provincia = Number.parseInt(cedula.substring(0, 2), 10)
  const tercerDigito = Number.parseInt(cedula[2], 10)

  if (provincia < 1 || provincia > 24) return false
  if (tercerDigito >= 6) return false

  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  const digitos = cedula.split("").map(Number)

  let suma = 0
  for (let index = 0; index < 9; index++) {
    let resultado = digitos[index] * coeficientes[index]
    if (resultado > 9) resultado -= 9
    suma += resultado
  }

  const digitoVerificador = (10 - (suma % 10)) % 10
  return digitoVerificador === digitos[9]

}

