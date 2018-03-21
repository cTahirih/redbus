import React from 'react';
import FigureContentIconBanks from './FigureContentIconBanks';
// import BCP from '../assets/images/bcp-logo.png';

const SliderBankIconsTab2 = ({ dataIconCash }) => (
  <div className="col-10">
    <div className="row d-flex flex-wrap">
      {dataIconCash.banksCash.map(elemt => (
        <FigureContentIconBanks key={elemt.id} {...elemt}/>
      ))}
    </div>
  </div>
)

export default SliderBankIconsTab2;