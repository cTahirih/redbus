import React from 'react';
import Nav from './Nav';
import Row from './Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';


const Main = () => (
  <main className="container font-roboto">
    <Row>
      <Nav />
    </Row>

  </main>
)

export default Main;