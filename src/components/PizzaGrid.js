// Importing necessary components and styles
import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import "./PizzaGrid.css";

function PizzaGrid() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/items");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPizzas(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Oops! Something went wrong... Please try later");
      setIsLoading(false);
    }
  }

  return (
    <Layout isLoading={isLoading} error={error}>
      {pizzas.map((pizza) => (
        <div className="pizza-item" key={pizza.id}>
          <img src={pizza.image} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>{pizza.shortDescription}</p>
          <p>${pizza.price.toFixed(2)}</p>
          <p>Toppings: {pizza.toppings.join(", ")}</p>
        </div>
      ))}
    </Layout>
  );
}

export default PizzaGrid;
