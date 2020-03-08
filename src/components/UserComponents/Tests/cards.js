import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
 
class Cards extends Component{
    constructor(props) {
        super(props);
       
    }

        render() {
            return (
                <div>
      <Card>
        <CardImg top width="100%" height="350rem" src={this.props.details.img} alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>{this.props.details.name}</strong></CardTitle>
          
          <CardText>{this.props.details.description}</CardText>
          <Link to={this.props.details.link}><Button>Test Now</Button></Link>
        </CardBody>
      </Card>
    </div> 
            );
        }
    

    } 

export default Cards;