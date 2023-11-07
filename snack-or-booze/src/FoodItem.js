import React, {useState, useEffect} from "react";
import { redirect, useParams, useNavigate, Navigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";

function FoodItem({ items:options, cantFind }) {
  const {id} = useParams();
  const {snackordrink} = useParams();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
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
  
  useEffect(() => {
    let clickedItem = items.find(item => item.id === id);
    if (clickedItem) {
      setItem(clickedItem);
    }
  }, [items, id])

  if (!item) return <Navigate to={cantFind} />;

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
