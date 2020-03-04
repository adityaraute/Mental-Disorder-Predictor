import React, { Component } from 'react';
import axios from 'axios';

class Autism extends Component{
    constructor(props) {
        super(props);
        this.state = {
            testid: 0,
            one: '',
            two: '',
            three: '',
            four: ''
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

        var formData = new FormData();
        formData.append('q1',1);
        formData.append('q2',0);
        formData.append('q3',0);
        formData.append('q4',0);
        formData.append('q5',0);
        formData.append('q6',0);
        formData.append('q7',0);
        formData.append('q8',0);
        formData.append('q9',0);
        formData.append('q10',0);

        axios({
            method: 'post',
            url: 'https://gentle-caverns-95040.herokuapp.com/',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response);
                console.log("autism prediction",response.data.results.prediction);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

    }
    componentDidMount() {
        console.log('Aut');

    }
    render(){
        return(
        <form onSubmit={this.formSub}>
                    
                    
<h5>Autism questions</h5>

                    
<p>
    1)Does your child look at you when you call his/her name?
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually
<p>
    2)How easy is it for you to get eye contact with your child? 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<p>
    3)Does your child point to indicate that s/he wants something? (e.g. a toy that is 
out of reach) 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually
<p>
4)Does your child point to share interest with you? (e.g. pointing at an 
interesting sight) 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually
<p>
5)Does your child pretend? (e.g. care for dolls, talk on a toy phone) 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<p>
6)Does your child follow where you’re looking? 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<p>
7)If you or someone else in the family is visibly upset, does your child show signs 
of wanting to comfort them? (e.g. stroking hair, hugging them)
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<p>
8)Would you describe your child’s first words as:
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually


<p>
9)Does your child use simple gestures? (e.g. wave goodbye) 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<p>

10)Does your child stare at nothing with no apparent purpose? 
 
</p>

<input type="radio" name="always" value="always"/>always
<input type="radio" name="usually" value="usually"/>usually
<input type="radio" name="sometimes" value="sometimes"/>sometimes
<input type="radio" name="rarely" value="rarely"/>rarely
<input type="radio" name="never" value="usually"/>usually

<br></br>
<br></br>
<br></br>

<input type="submit" title="submit"></input>
<br></br>
<br></br>
<br></br>

</form>
        )
    }
    
}
export default Autism;