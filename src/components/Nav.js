import React from 'react';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import '../css/main.css';

const Nav = () => (
  <div className="col-12">
    <Tabs>
      <Tab label="Banca por internet">
        <Tab1 />
      </Tab>
      <Tab label="Pago en efectivo">
        <Tab2 />
      </Tab>
    </Tabs>
  </div>
)

export default Nav;