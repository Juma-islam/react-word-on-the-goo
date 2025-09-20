import { use, useState } from "react"
import Country from "../country/Country";


const Countries = ({countriesPromise}) => {
  const [visitedCountries , setVisitedCountries] = useState([]);
  const handleEvent = (country)=>{
console.log("clicked" , country);
const newVisitedCountries = [...visitedCountries, country];
setVisitedCountries(newVisitedCountries);

  }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

    
  return (
    <div><h1 className="font-bold text-2xl text-center my-3 text-green-500"> Countries {countries.length}</h1>
    <h1 className="font-bold text-2xl text-center ">Total Visited Countries : {visitedCountries.length} </h1> 
    <ol className="font-bold text-2xl text-center">
   
      {visitedCountries.map((country, index)=> <li key={index}>{country.name.common}</li>)}
    </ol>
  <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
      {
        countries.map((country)=> <Country key={country.cca3.cca3} country = {country} handleEvent = {handleEvent}></Country>)
    }
  </div>
    </div>
  )
}

export default Countries;