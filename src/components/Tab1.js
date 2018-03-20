import React from 'react';
import Row from './Row';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';


const Tab1 = () => (
  <div className="container">
    <Row>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Row>
  </div>
)

export default Tab1;