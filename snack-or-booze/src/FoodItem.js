import React, {useState, useEffect} from "react";
import { redirect, useParams, useNavigate, Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import NotFoundItem from "./NotFoundItem";

function FoodItem({ items:options, cantFind }) {
  const {id} = useParams();
  const {snackordrink} = useParams();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    // returns snacks or drinks data
    const getItems = async() => {
      try {
        if (snackordrink === 'snacks') {
          const snacks = await SnackOrBoozeApi.getSnacks();
          setItems(snacks);
        } else if (snackordrink === 'drinks') {
          const drinks = await SnackOrBoozeApi.getDrinks();
          setItems(drinks);
        }
      } catch(e) {
        console.error("Error fetching items in FoodMenu component", e);
      }
    }
    getItems();
  }, [snackordrink]);
  
  // after snacks or drinks data returned, find item in that data set based on the id
  // return that item
  useEffect(() => {
    let clickedItem = items.find(item => item.id === id);
    if (clickedItem) {
      setItem(clickedItem);
    }
  }, [items, id])

  if (!item) return <Navigate to={cantFind} />;

  // render a Not Found component
  if (id !== item.id) {
    return (
      <>
        <NotFoundItem snackordrink={snackordrink}/>
      </>
    )
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
