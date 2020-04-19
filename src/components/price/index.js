import React, { Component } from 'react';
import MyButton from '../UI/MyButton';
import Zoom from 'react-reveal/Zoom';

class Price extends Component {
    state = {
        prices: [20, 50, 100],
        positions: ['Economy', 'Normal', 'Unlimited'],
        desc: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit.'],
        linkTo: ['#'],
        delay: [0, 500, 1000]
    }

    showBoxes = () => {
        return (
            this.state.prices.map((box, i) => (
                <Zoom delay={this.state.delay[i]} key={i}>
                    <div className="price_item">
                        <div className="price_item_wrapper">
                            <div className="price_title">
                                <span>{this.state.prices[i]}.000 VND</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className="price_description">
                                {this.state.desc}
                            </div>
                            <div className="price_button">
                                <MyButton text="Purchase" type="contained" btnColor="secondary" />
                            </div>

                        </div>

                    </div>
                </Zoom>
            )))
    }
    render() {
        return (
            <div className="price_section">
                <div className="center_wrapper price_details">
                    <h2>Pricing</h2>
                    <div className="price_details_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>

            </div>
        );
    }
}

export default Price;