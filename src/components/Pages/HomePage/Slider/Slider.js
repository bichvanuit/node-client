import { Carousel } from 'antd';
import React from 'react';

import SliderContent from './SliderContent';
import 'antd/dist/antd.min.css';

import { Sliders as sliders } from '../../../../json/MoocJson';

const Slide = () => {
    return (
        <React.Fragment>
            <Carousel autoplay>
                {
                    sliders.map((data) => {
                        return (
                            <div>
                                <SliderContent key={ data.id } src={ data.src } name={ data.name }/>
                            </div>
                        );
                    })
                }
            </Carousel>
        </React.Fragment>
    );
};

export default Slide;