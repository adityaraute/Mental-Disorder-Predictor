import React, {Component} from 'react';

class TestC extends Component{
    constructor(props){
        super(props);
        this.state={
            testid: 0,
                one :'',
                two :'',
                three:'',
                four:''
        };
    }
    changehandler= (e)=>{
        
        this.setState({
            [e.target.id]: e.target.value
          });
    }
    formSub= (e) => {
        e.preventDefault();
        console.log(this.state);
        
    }
    render(){
    //     switch(this.state.testid){
    //             case 0: return(
    //                                 <div>
    //                                     <h4>Id : 0</h4>
    //                                 </div>
    //                             )
    //             case 1:return(
    //                                 <div>
    //                                 <h4>Id : 1</h4>
                                        
    //                                 </div>
    //                             )
    //             case 2:return(
    //                                 <div>
    //                                 <h4>Id : 2</h4>
                                        
    //                                 </div>
    //                             )
    //     }
        
    // }

    
    return(
        <div>
            <h2>Test</h2>
              <form onSubmit={this.formSub}>
                <h5>Answer the questions</h5>

                    <label htmlFor="one">Q1</label>
                    <input type="text" id="one" placeholder="One"  onChange={this.changehandler}  value={this.state.one}/><br></br>
                    <label htmlFor="two">Q2</label>
                    <input type="text" id="two" placeholder="Two"  onChange={this.changehandler} value={this.state.two}/><br></br>
                    <label htmlFor="three">Q3</label>
                    <input type="text" id="three" placeholder="Three"  onChange={this.changehandler} value={this.state.three}/><br></br>
                    <label htmlFor="four">Q4</label>
                    <input type="text" id="four" placeholder="Four"  onChange={this.changehandler} value={this.state.four}/>
                    <input type="submit" title="submit"></input>
                </form>
        </div>
    );
}

}
export default TestC;