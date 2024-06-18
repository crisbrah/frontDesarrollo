import fetchCountries from './services.js'
import { renderCountries, suma } from './utils.js'

let countryData = []

const searchInput = document.querySelector('.app__input')
const regionFilter = document.querySelector('.app__filter')

searchInput.addEventListener('input', function (event) {
  const { value } = event.target
  const loweredValue = value.toLowerCase()

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase() 

    // TODO: RETO 01 - Adicionalmente necesitamos filtrar los paises por su capital
    //return loweredName.includes(loweredValue)
    const loweredCapital = country.capital.join(', ').toLowerCase()
    return loweredName.includes(loweredValue) || loweredCapital.includes(loweredValue)
  })

  renderCountries(filteredCountries)
})

// TODO: RETO 02 - 


regionFilter.addEventListener('input', filterCountries)

function filterCountries() {
  const searchValue = searchInput.value.toLowerCase()
  const regionValue = regionFilter.value.toLowerCase()

  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()
    const loweredCapital = country.capital.join(', ').toLowerCase()
    const loweredRegion = country.region.toLowerCase()

    return (
      (loweredName.includes(searchValue) || loweredCapital.includes(searchValue)) &&
      (regionValue === '' || loweredRegion === regionValue)
    )
  })

  renderCountries(filteredCountries)
}


fetchCountries()
  .then(countries => {
    console.log(countries)

    countryData = countries

    renderCountries(countries)

    // console.log(suma(9, 8))
  })