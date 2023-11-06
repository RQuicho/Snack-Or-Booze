import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [items, setItems] = useState([]);
  // const {snackordrink} = useParams();

  useEffect(() => {
    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();

        setSnacks(snacks);
        setDrinks(drinks);

        // if (snackordrink === 'snacks') {
        //   setItems(snacks);
        // } else if (snackordrink === 'drinks') {
        //   setItems(drinks);
        // }
    
        console.log('snacks in App.js: ', snacks);
        console.log('drinks in App.js: ', drinks);
        // console.log('items in App.js: ', items);
   
        setIsLoading(false);
      } catch(e) {
        console.error('Error fetching items in App.js', e);
      }
    }
    getItems();
  }, []);



  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks}/>} />
            <Route path="/:snackordrink" element={<FoodMenu items={items} title="Snacks" />} />
            <Route path="/:snackordrink/:id" element={<FoodItem cantFind="/snacks" />} />
            <Route path="/*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
