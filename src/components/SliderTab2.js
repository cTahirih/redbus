import React from 'react';
import Row from './Row';
import SliderArrowTab2 from './SliderArrowTab2';
import SliderBankIconsTab2 from './SliderBankIconsTab2';

const SliderTab2 = ({ iconSliderCash }) => (
  <Row>
    <div className="col-12">
      <Row>
        <SliderArrowTab2 />
        <SliderBankIconsTab2 dataIconCash = { iconSliderCash }/>
      </Row>
    </div>
  </Row>
)

export default SliderTab2;