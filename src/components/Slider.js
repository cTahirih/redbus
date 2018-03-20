import React from 'react';
import Row from './Row';
import SliderArrowTab2 from './SliderArrowTab2';
import SliderBankIcons from './SliderBankIcons'

const Slider = () => (
  <Row>
    <div className="col-12">
      <Row>
        <SliderArrowTab2 />
        <SliderBankIcons />
      </Row>
    </div>
  </Row>
)

export default Slider;