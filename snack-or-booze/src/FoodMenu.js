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

function FoodMenu({ items:options }) {
  const {snackordrink} = useParams();
  const [items, setItems] = useState([]);

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

  console.log('items in FoodMenu: ', items);

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
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
