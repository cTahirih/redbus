import React from 'react';
import BankItem from './BankItem';
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIcons = ({ dataIconBanks}) => (
  <div className="col-10">
    <div className="row d-flex flex-wrap">
      {dataIconBanks.datacopy.banksInternet.map(el=>(
        <BankItem 
          key={el.id}
          {...el}
        />
      ))}
    </div>
  </div>
)

export default SliderBankIcons

