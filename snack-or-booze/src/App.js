import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import NotFound from "./NotFoundMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [items, setItems] = useState([]);
 
  useEffect(() => {
    // returns snacks and drinks data
    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacks);
        setDrinks(drinks);   
        setIsLoading(false);
      } catch(e) {
        console.error('Error fetching items in App.js', e);
      }
    }
    getItems();
  }, []);

  // if isLoading state is true, render a Loading message
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home snacks={snacks} drinks={drinks}/>} />
            <Route 
              path="/:snackordrink" 
              element={<FoodMenu items={items} 
              title= "Snacks" />} 
            />
            <Route 
              path="/:snackordrink/:id" 
              element={<FoodItem items={items} 
              cantFind="/:snackordrink" />} 
            />
            <Route 
              path="*" 
              element={<NotFound />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
