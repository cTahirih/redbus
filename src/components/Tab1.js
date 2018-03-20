import React from 'react';
import Row from './Row';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';


const Tab1 = () => (
  <div className="container mt-4 rounded">
    <Row>
      <SectionOne />
    </Row>
    <Row>
      <SectionTwo />
    </Row>
    <Row>
      <SectionThree />
    </Row>
  </div>
)

export default Tab1;