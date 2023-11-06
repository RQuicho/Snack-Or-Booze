import React from "react";
import { redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  const {snackordrink} = useParams();

  let snack = items.find(snack => snack.id === id);
  if (!snack) return redirect(cantFind);

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snackordrink.name}
          </CardTitle>
          <CardText className="font-italic">{snackordrink.description}</CardText>
          <p>
            <b>Recipe:</b> {snackordrink.recipe}
          </p>
          <p>
            <b>Serve:</b> {snackordrink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
