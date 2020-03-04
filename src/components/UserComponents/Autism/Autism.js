import React, { Component } from 'react';

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