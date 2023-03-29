import { useEffect } from "react";
import { useDispatch } from "react-redux";

import fetchProducts from "./api/dummyjson";

import "./App.css";
import Products from "./components/Products";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className="mt-3">Dummy JSON API call</h1>
      <Products />
    </div>
  );
}

export default App;
