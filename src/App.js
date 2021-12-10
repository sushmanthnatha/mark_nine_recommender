import React from "react";
import "./styles.css";
import { useState } from "react";

const OnlineShoppingAppDictionary = {
  Clothing: [
    { name: "Myntra", rating: "9/10" },
    { name: "Bewakoof", rating: "8.5/10" },
    { name: "Flipkart", rating: "8/10" }
  ],
 Cosmetics: [
    { name: "Nykaa", rating: "9.5/10" },
    { name: "Amazon", rating: "8.0/10" },
    { name: "Flipkart", rating: "7.5/10" }
  ],
  Wholesale: [
    { name: "Indiamart", rating: "8.5/10" },
    { name: "Amazon", rating: "7/10" },
    { name: "Flipkart", rating: "6.5/10" }
  ]
};

export default function App() {
  const [selectedPreference, setPreference] = useState("Clothing");
  function genreClickHandler(preference) {
    setPreference(preference);
  }
  return (
    <div className="App">
      <h1> Best Shopping Apps  </h1>
      <h3>Select your category in Online Shopping</h3>

      <div>
        {Object.keys(OnlineShoppingAppDictionary).map((preference) => (
          <button
            className="button"
            onClick={() => genreClickHandler(preference)}
          >
            {preference}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <ul>
          {OnlineShoppingAppDictionary[selectedPreference].map((company) => (
            <li key={company.name}>
              <div className="companyName">{company.name}</div>

              <div className="companyRating">{company.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}