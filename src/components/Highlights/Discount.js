import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../UI/Button';

class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    componentDidUpdate(){
        setTimeout(() => this.porcentage(), 30) 
       }
    porcentage = () => {
        if (this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart: this.state.discountStart + 1})
        }
    }


    render() {
        return (
         
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porcentage()}>
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                    <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before end of July</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique expedita iure sunt, unde qui laudantium dicta, fuga, ad quos blanditiis sint sequi distinctio itaque? Natus sunt laborum repellendus obcaecati iure illo aliquid aut perferendis, sed voluptatum! Sequi ipsa qui sint, quam numquam odio accusantium quibusdam officia voluptates, debitis quia.</p>
                        <div>
                            <MyButton text="Purchase ticket" bck="#ffa800" color="#ffffff" link="http://google.com"/>
                        </div>
                    </div>
                    </Slide>
                    
                </div>
            </div>
        )
    }
}
export default Discount;
