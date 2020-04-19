import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../UI/MyButton';

class Discount extends Component{
    state ={
        discountStart: 0,
        discountEnd: 50
    }

    percentageHandler = ()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })

        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentageHandler();
        }, 30);
    }
    render(){
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade left 
                        onReveal={()=>this.percentageHandler()}>
                        <div className="discount_percent">
                            <span className="percent_number">{this.state.discountStart}%</span>
                            <div className="percent_letters">OFF</div>
                        </div>
                    </Fade>
    
                    <Slide right>
                        <div className="discount_description">
                            <h4>Purchase Tickets before 10 April</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. A pellentesque sit amet porttitor eget dolor morbi.</p>
                            <div className="btn_wrapper">
                                <MyButton
                                    text="Purchase ticket"
                                    type="contained"
                                    btnColor="secondary"/>
                            </div>
                        </div>
                    </Slide>
    
    
    
                </div>
    
            </div>
        );
    }
};

export default Discount;