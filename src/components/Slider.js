import React from 'react';
import Row from './Row';
import SliderArrow from './SliderArrow';
import SliderBankIcons from './SliderBankIcons'

const Slider = () => (
  <Row>
    <div className="col-12">
      <Row>
        <SliderArrow />
        <SliderBankIcons />
      </Row>
    </div>
  </Row>
)

export default Slider;