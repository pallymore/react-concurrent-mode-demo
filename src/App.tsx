import React, { useState } from "react";
import "./App.css";

import allCities from "./api/data/allCities.json";

const citiesToShow = allCities.slice(0, 5000);

function App() {
  const [keyword, setFilter] = useState<string>("");

  return (
    <div className="App">
      <input
        placeholder="search"
        onChange={(e) => {
          const text = e.target.value;
          setFilter(text);
        }}
      />
      <input
        placeholder="time sliced search"
        onChange={(e) => {
          const text = e.target.value;
          requestAnimationFrame(() => setFilter(text));
        }}
      />
      <ul>
        {citiesToShow
          .filter(({ name, country, subcountry }) =>
            [name, country, subcountry].some(
              (field) => field && field.includes(keyword)
            )
          )
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
