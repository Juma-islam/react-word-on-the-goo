import { Suspense } from "react";
import Countries from "./component/countries/Countries";

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then((res)=> res.json())
const App = () => {
  return (
    <div>
    <Suspense fallback={<p className="font-bold text-2xl text-center text-green-400">Loading...</p>}><Countries countriesPromise = {countriesPromise} /></Suspense>
    </div>
  );
};

export default App;
