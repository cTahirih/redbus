import React from 'react';

const FigureContentIconBanks = ({ id, url, info }) => (
  <figure className="m-1">
    <img src={url} alt={id} className="p-1 img-fluid bank-logo-size" />
    <figcaption className="text-center">{info}</figcaption>
  </figure>
)

export default FigureContentIconBanks;