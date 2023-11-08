import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Navigate, useParams } from "react-router-dom";

function Home({snacks, drinks}) {
  const {snackordrink} = useParams();

  if (snackordrink !== 'snacks' || snackordrink !== 'drinks') {
    <Navigate to='/' />
  }

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <h1>Snacks: {snacks.length}</h1>
      <h1>Drinks: {drinks.length}</h1>
    </section>
  );
}

export default Home;
