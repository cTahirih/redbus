import React from 'react';
import Row from './Row';

const SectionOne = () => (
  <div className="col-12">
    <Row>
      <div className="column text-center col-left">
        <span>Código de pago</span>
        <p>9162582</p>
      </div>
      <div className="colmiddle text-center">
        <span>Total</span>
        <p>s/. 140.00</p>
      </div>
      <div className="column text-center col-right">
        <span>Tu orden expirará:</span>
        <p>23 Feb. - 01:12 pm.</p>
      </div>
    </Row>
  </div>
)

export default SectionOne;