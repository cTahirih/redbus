import React from 'react';
import Row from './Row';
import SectionOne from './SectionOne';
import SectionTwoTab1 from './SectionTwoTab1';
import SectionThree from './SectionThree';


const Tab1 = ({ bankInternet }) => (
  <div className="container mt-4 rounded">
    <Row>
      <SectionOne />
    </Row>
    <Row>
      <SectionTwoTab1 datacopy ={bankInternet}/>
    </Row>
    <Row>
      <SectionThree />
    </Row>
  </div>
)

export default Tab1;