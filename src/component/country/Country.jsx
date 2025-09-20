import { useState } from "react";


const Country = ({country, handleEvent}) => {
    const [visited , setVisited] = useState(false);
    // console.log(country.region.region);
    const handleClick = ()=>{
        //fast system
//         if(visited){
// setVisited(false)
//         }
// else{
//     setVisited(true);
   // }
   // second system
//  {visited ? setVisited(false) : setVisited(true)}
 //3rd system
// setVisited(visited ? false : true)
// 4th system
setVisited(!visited);
handleEvent(country);

    }
    return (
        <div className="">
        <div className={` space-y-2 text-center shadow-lg p-4 bg-green-100 rounded-lg ${visited ? "bg-pink-200" : "bg-green-200"}`}>
                <img  className="mx-auto h-56 w-96" src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Population : {country.population.population}</p>
            <p>Capital : {country.capital.capital}</p>
            <p> Region : {country.region.region}</p>
            <p>Area : {country.area.area} {country.area.area > 300000 ? "Big country" : "small country"}</p>
            <button onClick={handleClick} className="py-2 px-4 rounded-lg font-bold text-white bg-green-600">{visited ? "Visited" : "Not visited"}</button>
        </div>
        </div>
    );
};

export default Country;
// Name : Bangladesh
// Population : 164689383

// Capital : Dhaka

// Region : Asia

// Area : 147570 small country

// Not visited