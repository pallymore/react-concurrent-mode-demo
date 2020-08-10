import React, { useState } from "react";
import "./App.css";

import { City } from "./api/types";
// import { getAllCities } from "./api";

import cities from "./api/data/allCities.json";

const citiesToShow = cities.slice(0, 3000);

function App() {
  //  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="App">
      <input
        placeholder="search"
        onChange={(e) => {
          const text = e.target.value;
          requestAnimationFrame(() => setFilter(text));
        }}
      />
      <ul>
        {citiesToShow
          .filter((c) => c.name.includes(filter) || c.country.includes(filter))
          .map((city) => (
            <li key={city.geonameid}>
              {[city.name, city.subcountry, city.country].join(", ")}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
