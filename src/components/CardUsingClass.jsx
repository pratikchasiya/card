import {  Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import { Component,Fragment } from "react";
class CardUsingClass extends Component {
  render() {
    return (
      <Fragment>
       <div>
          <Card
            color=""
            style={{
              width: "18rem",
              height: "25rem"
            }}
          >
            
            <img alt="Sample" src={this.props.image}  />
            <CardBody style={{backgroundColor:"bisque"}}>
              <CardTitle tag="h5" style={{color:"chocolate"}}>{this.props.title}</CardTitle>
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle> */}
              <CardText style={{textAlign:"justify", color:"darkgoldenrod", fontSize:"18px"}}>
                {this.props.discription}
              </CardText>
            
            </CardBody>
          </Card>
         
        </div>
      
      </Fragment>
    );
  }
}
export default CardUsingClass;
