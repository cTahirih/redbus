import React from 'react';
import Row from './Row';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionFor from './SectionFor';


const Tab2 = () => (
  <div className="container mt-4 rounded">
    <Row>
      <SectionOne />
    </Row>
    <Row>
      <SectionTwo />
    </Row>
    <Row>
      <SectionFor />
    </Row>
  </div>
)

export default Tab2;