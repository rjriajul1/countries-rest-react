import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const fetchCountriesData = fetch("https://restcountries.com/v3.1/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<h3>coming countries name......</h3>}> 
      <Countries fetchCountriesData={fetchCountriesData}></Countries>
      </Suspense>
    </>
  );
}

export default App;
