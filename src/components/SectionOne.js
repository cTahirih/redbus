import React from 'react';
import Row from './Row';

const SectionOne = () => (
  <div className="col-12">
    <Row>
      <div className="col-4">
        <span>Código de pago</span>
        <p>9162582</p>
      </div>
      <div className="col-4">
        <p>Total</p>
        <p>s/. 140.00</p>
      </div>
      <div className="col-4">
        <span>Tu orden expirará:</span>
        <p>23 Feb. - 01:12 pm.</p>
      </div>
    </Row>
  </div>
)

export default SectionOne;