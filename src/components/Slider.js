import React from 'react';
import Row from './Row';
import SliderArrowTab1 from './SliderArrowTab1';
import SliderBankIcons from './SliderBankIcons'

const Slider = () => (
  <Row>
    <div className="col-12">
      <Row>
        <SliderArrowTab1 />
        <SliderBankIcons />
      </Row>
    </div>
  </Row>
)

export default Slider;