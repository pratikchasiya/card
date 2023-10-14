import React, {Fragment} from "react";
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

const CardUsingFunction = (props) => {
  return (
    <Fragment>
      <div>
        <Card
          color=""
          style={{
            width: "18rem",
            height: "25rem",
          }}
        >
          <img alt="Sample" src={props.image} />
          <CardBody style={{backgroundColor: "lightgrey"}}>
            <CardTitle tag="h5" style={{color: "darkgreen"}}>
              {props.title}
            </CardTitle>
            {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
            <CardText
              style={{
                textAlign: "justify",
                color: "darkgoldenrod",
                fontSize: "18px",
              }}
            >
              {props.discription}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

export default CardUsingFunction;
