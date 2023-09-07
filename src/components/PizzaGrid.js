import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import "./Layout.css";

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
        const body = await response.json();
        throw new Error(body.error);
      }

      const data = await response.json();
      setPizzas(data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  return (
    <Layout isLoading={isLoading} error={error}>
      {pizzas.map((pizza) => (
        <div className="item" key={pizza.id}>
          <img src={pizza.image} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>{pizza.shortDescription}</p>
          <p>${pizza.price.toFixed(2)}</p>
          {pizza.toppings.length ? (
            <p>Toppings: {pizza.toppings.join(", ")}</p>
          ) : null}
        </div>
      ))}
    </Layout>
  );
}

export default PizzaGrid;
