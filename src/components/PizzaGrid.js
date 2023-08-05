// Importing necessary components and styles
import React, { useEffect, useState } from "react";
import "./PizzaGrid.css";

// Defining the main component function
function PizzaGrid() {
  // Defining state variables to store data and loading/error status
  const [pizzas, setPizzas] = useState([]); // Stores the fetched pizza data
  const [isLoading, setIsLoading] = useState(true); // Loading status indicator
  const [error, setError] = useState(null); // Error state to store error messages


  useEffect(() => {
    fetchData(); 
  }, []);

  // Function to fetch pizza data from the API
  async function fetchData() {
    try {
      // Simulating a loading delay of 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Sending a request to the backend API
      const response = await fetch("http://localhost:8000/items");

      // Checking if the response is not OK (not in the 2xx range)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parsing the response data and update the state
      const data = await response.json();
      setPizzas(data.data);
      setIsLoading(false); // Turn off loading status when data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message); // Set error message and turn off loading status
      setIsLoading(false);
    }
  }

  // Rendering....
  return (
    <div className="pizza-grid">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        // If not loading and no error go and map over pizzas and render them
        pizzas.map((pizza) => (
          <div className="pizza-item" key={pizza.id}>
            <img src={pizza.image} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.shortDescription}</p>
            <p>${pizza.price.toFixed(2)}</p>
            <p>Toppings: {pizza.toppings.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PizzaGrid;
