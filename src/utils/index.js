export const continentList = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export const formatValue = value => {
  if (typeof value === 'number') {
    const number = value.toString()

    const length = number.length % 3

    const initial = number.slice(0, length)
    const final = number.slice(length)
    if (!final) {
      return number
    }

    if (!initial) {
      return final.match(/[0-9]{3}/g).join(',')
    }

    return `${initial},${final.match(/[0-9]{3}/g).join(',')}`
  }

  return value
}
