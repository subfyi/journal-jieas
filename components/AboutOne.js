import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class AboutOne extends Component {
    constructor(){
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-one ">
                <img src="assets/images/circle-stripe.png" className="about-one__circle" alt="" />
                    <div className="container text-center">
                        <div className="block-title text-center">
                            <a target="_blank" className="block-title__title" href="https://dergipark.org.tr/en/pub/jieas">
                            <h2 className="block-title__title">
                                    Journal of International Environmental Application and Science

                                 </h2>
                            </a>
                        </div>

                        <p className="about-one__text">JIEAS (Journal of International Environmental Application and Science) is a leading journal for environmental researchers in several areas such as water pollution, wastewater pollution, air pollution, solid waste management, biotechnology, soil pollution, surface and groundwater, renewable energy, energy management, microbiology, sustainability, waste recovery and transformation, fuzzy logic, artificial neural networks.


                            <br />
                            Journal welcomes the high-quality papers. Original research papers, state-of-the-art reviews and high quality technical notes are invited for publication.

                        </p>
                        <a href="https://dergipark.org.tr/en/journal/759/submission/step/manuscript/new" className="thm-btn about-one__btn">Send Paper</a>
                    </div>
            </section>
        );
    }
}

export default AboutOne;