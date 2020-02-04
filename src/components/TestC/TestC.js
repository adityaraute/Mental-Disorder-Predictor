import React, {Component} from 'react';

class TestC extends Component{
    constructor(props){
        super(props);
        this.state={
            testid: 0
        };
    }

    render(){
        switch(this.state.testid){
                case 0: return(
                                    <div>
                                        <h4>Id : 0</h4>
                                    </div>
                                )
                case 1:return(
                                    <div>
                                    <h4>Id : 1</h4>
                                        
                                    </div>
                                )
                case 2:return(
                                    <div>
                                    <h4>Id : 2</h4>
                                        
                                    </div>
                                )
        }
        
    }
}


export default TestC;