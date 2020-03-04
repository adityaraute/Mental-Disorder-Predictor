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
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });

        // axios.post('https://gentle-caverns-95040.herokuapp.com/',JSON.stringify({
                    
        //             'q2':0,
        //             'q3':1,
        //             'q4':0,
        //             'q5':1,
        //             'q6':0,
        //             'q7':1,
        //             'q8':0,
        //             'q9':1,
        //             'q10':0
        //     	})).then( response => {
        //             console.log(response);
        //         }).catch( error => {
        //             console.log(error);
        //         })

       

    }
    componentDidMount() {
        console.log('Aut');

    }
    render(){
        return(
        <form onSubmit={this.formSub}>
                    <h5>Autism questions</h5>

                    
<p>Does your child look at you when you call his/her name?
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>How easy is it for you to get eye contact with your child? 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>Does your child point to indicate that s/he wants something? (e.g. a toy that is 
out of reach) 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
Does your child point to share interest with you? (e.g. poin9ng at an 
interes9ng sight) 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
Does your child pretend? (e.g. care for dolls, talk on a toy phone) 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
Does your child follow where you’re looking? 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
If you or someone else in the family is visibly upset, does your child show signs 
of wan9ng to comfort them? (e.g. stroking hair, hugging them)
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
Would you describe your child’s first words as:
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>
Does your child use simple gestures? (e.g. wave goodbye) 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never

<p>

Does your child stare at nothing with no apparent purpose? 
 
</p>
<input type="radio" name="" value="always"> always
<input type="radio" name="" value="usually">usually
<input type="radio" name="" value="usually">sometimes
<input type="radio" name="" value="usually">rarely
<input type="radio" name="" value="usually">never












                </form>
        )
    }
    
}
export default Autism;