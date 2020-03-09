import React, { Component } from 'react';
import firebase from '../../../firebase';
import classes from './Result.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
        }
    }
    componentDidMount() {
        console.log('Result', this.state.user);
        const db = firebase.firestore();
        let cityRef = db.collection('test').doc(this.state.user);
        let getDoc = cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log("no data");
                } else {
                    var res = doc.data().array;
                    this.setState({ results: doc.data().array });
                    res.forEach(element => {
                        // console.log(element);
                        // console.log(element.prediction);
                        // console.log(element.test);
                        if (element.test == 'Colour Blindness') console.log(element.correct);
                    });
                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });
    }
    render() {
        
        if (this.state.results) {
            this.autism = this.state.results.map((el, index) =>
                // <div>{el.test} - {el.prediction}</div>
                <TableRow key={el.test}>
                <TableCell component="th" scope="row" align="center">
                    {el.test}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                    {el.prediction}
                </TableCell>
                {/* <TableCell align="right">{el.test}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
            )
            return (
                <Container>
                <div>
                    Result  (oldest attempt first)
                    <div className={classes.card}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Test</TableCell>
                                    <TableCell align="center">Result</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.autism}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </div>
                   
                </div>
                </Container>
            )
        }
        else {
            return (
                <div>No data</div>
            )
        }

    }
}

export default Result;