import React from 'react';
import Row from './Row';
import SliderArrowTab2 from './SliderArrowTab2';
import SliderBankIcons from './SliderBankIcons'

const SliderTab2 = ({ bankCash }) => (
  <Row>
    <div className="col-12">
      <Row>
        <SliderArrowTab2 />
        <SliderBankIcons dataIconBanks = { bankCash }/>
      </Row>
    </div>
  </Row>
)

export default SliderTab2;