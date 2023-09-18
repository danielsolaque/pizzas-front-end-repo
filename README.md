# Pizza Menu App

This is a simple React application that displays a pizza menu fetched from a server. It consists of three main components: `App`, `PizzaGrid`, and `Layout`.

## Components

### App
- The main component that renders the entire application.
- Displays the title "Pizza Menu" and renders the `PizzaGrid` component.

### PizzaGrid
- Fetches pizza data from a server at `http://localhost:8000/items` when it mounts using the `useEffect` hook.
- Manages the state of `pizzas`, `isLoading`, and `error` using the `useState` hook.
- Displays a loading message or an error message if there's an issue while fetching data.
- Once data is fetched successfully, it maps over the `pizzas` array and renders each pizza's information using the `Layout` component.
- Each pizza's information includes an image, name, short description, price, and toppings (if available).

### Layout
- A reusable layout component that handles content display based on the loading and error states.
- If `isLoading` is true, it displays a loading message.
- If there's an `error` message, it displays the error message.
- If neither of the above conditions is met, it renders the children components passed to it within a `div` with a class of "wrapper" and a child `div` with a class of "grid".

## Usage
1. Clone this repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the project dependencies.
5. Start the development server with `npm start`.
6. The application should be accessible in your web browser at `http://localhost:3000`.

## Dependencies
- React
- CSS (stylesheets for styling)

## Getting Started
To get started with this project, follow the steps outlined in the "Usage" section above.
