import React from 'react';
import BankItem from './BankItem';
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIcons = ({ bankInternet}) => (
  <div className="col-10">
    <div className="row d-flex flex-wrap">
      {bankInternet.map(e => (
        <BankItem key={e.id} {...e}/>
      ))}
    </div>
  </div>
)

export default SliderBankIcons

