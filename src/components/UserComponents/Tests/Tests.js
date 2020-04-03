import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Cards from './cards'; 
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import classes from './Tests.module.css'
// import Autism from '../Autism/Autism';
import img3 from '../../../Assets/colour.jpeg';
import img1 from '../../../Assets/autism.jpg';
import img2 from '../../../Assets/dyslexia.jpg';
class Tests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testid: 0,
            one: '',
            two: '',
            three: '',
            four: '',
            test1: [
                {
                    name: "Autism",
                   
                    description: "Test for Autism in Toddlers",
                    img:img1,
                    link: "/user/autism"
                }, 
                // {
                //     name: "Dyslexia",
                    
                //     description: "Test for Dyslexia in Toddlers",
                //     img:img2,
                //     link: "/user/dyslexia"
                // }, 
                {
                    name: "Colour Blindness",
                    
                    description: "Test for Colour Blindness in Toddlers",
                    img:img3,
                    link: "/user/colour"
                }
            ]
        };
    } 
    changehandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    formSub = (e) => {
        e.preventDefault();
        console.log(this.state);

    }
    componentDidMount() {
        console.log('Test');

    }
     render() {
       let details=this.state.test1.map(Test2 =>{
           return(
            <Col sm="4" key={Test2}>
            <Cards  details={Test2} />
        </Col>
           )
       });  
        return (

            <Container className={classes.card} fluid>
                <Row>
                   {details}
                </Row>
            </Container>
            /*<div>
                <h2>Tests</h2>
                <div>
                    <Link to="/user/autism">Autism</Link>
                    <Link to="/user/dyslexia">Dyslexia</Link>
                    <Link to="/user/colour">Colour Blindness</Link>
                </div>
            </div>*/
        );
    }

}
export default Tests;