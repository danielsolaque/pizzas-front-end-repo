import React from "react";
import "./PizzaGrid.css";

export function Layout({ isLoading, error, children }) {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return <div className="pizza-grid">{children}</div>;
}
