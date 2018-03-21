import React from 'react';
import Row from './Row';
import SectionOne from './SectionOne';
import SectionTwoTab2 from './SectionTwoTab2';
import SectionFor from './SectionFor';


const Tab2 = ({bankCash}) => (
  <div className="container mt-4 rounded">
    <Row>
      <SectionOne />
    </Row>
    <Row>
      <SectionTwoTab2 slidercash={bankCash}/>
    </Row>
    <Row>
      <SectionFor />
    </Row>
  </div>
)

export default Tab2;

//vhjxkhvjxhcvjh