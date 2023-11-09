import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import SnackOrBoozeApi from "./Api";
import NewItemForm from "./NewItemForm";
import NotFoundMenu from "./NotFoundMenu";

function FoodMenu({ items:options }) {
  const {snackordrink} = useParams(); // this is the argument in the URL ('/:snackordrink")
  const [items, setItems] = useState([]);

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

  // adds new item to db.json using SnackOrBoozeApi
  const addItem = async(newItemData) => {
    try {
      if (snackordrink === 'snacks') {
        const newItem = await SnackOrBoozeApi.postSnack(newItemData);
        setItems(items => [...items, newItem]);
      } else if (snackordrink === 'drinks') {
        const newItem = await SnackOrBoozeApi.postDrink(newItemData);
        setItems(items => [...items, newItem]);
      }
    } catch(e) {
      console.error("Error fetching new item data in FoodMenu component", e);
    }
  }

  // render a Not Found component
  if (snackordrink !== 'snacks' && snackordrink !== 'drinks') {
    return (
      <>
        <NotFoundMenu />
      </>
    )
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snackordrink.charAt(0).toUpperCase() + snackordrink.slice(1)} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <NewItemForm addItem={addItem}/>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${snackordrink}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
