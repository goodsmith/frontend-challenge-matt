import { create } from 'axios'

const API_URL = 'https://restcountries.eu/rest/v2'

const instance = create({
  baseURL: API_URL,
})

export const getCardData = async () => {
  const fields = ['population', 'name', 'flag', 'capital', 'region', 'alpha2Code']

  return instance.get(`/all?fields=${fields.join(';')}`)
}

export const getCountryDetails = async code => {
  const fields = [
    'name',
    'nativeName',
    'population',
    'region',
    'subregion',
    'capital',
    'topLevelDomain',
    'borders',
    'currencies',
    'languages',
  ]

  return instance.get(`/alpha/${code}?fields=${fields.join(';')}`)
}
