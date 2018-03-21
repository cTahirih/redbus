import React from 'react';
import Nav from './Nav';
import Row from './Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
// importar imágenes de bancos
import BCP from '../assets/images/bcp-logo.png';
import BBVA from '../assets/images/bbva-logo.png';
import Interbank from '../assets/images/interbank-logo.png';
import Scotibank from '../assets/images/scotiabank-logo.png';
import Banbif from '../assets/images/banbif-logo.png';
import Fullcarga from '../assets/images/full-carga-logo.png';
import WesternUnion from '../assets/images/western-union-logo.png';
import Kasnet from '../assets/images/kasnet-logo.png';

const data = {
  tabs: ['Banca por internet', 'Pagar en efectivo'],
  seccion1: [
    { id: 0, subtitle: 'Código de pago', subtitleContent: '9125682' },
    { id: 1, subtitle: 'total', subtitleContent: 'S/.140.00' },
    { id: 3, subtitle: 'Tu orden expirará', subtitleContent: '23 Feb - 01:12 p.m.' }
  ],
  banksInternet: [
    { id: 'BCP', url: BCP}, 
    { id: 'BBVA', url: BBVA}, 
    { id: 'Interbank', url: Interbank}, 
    { id: 'Scotiabank', url: Scotibank}, 
    { id: 'Banbif', url: Banbif}
  ],
  banksCash: [
    { id: 'BCP', url: BCP, info: 'Agentes y Bodegas Agencias'},
    { id: 'BBVA', url: BBVA, info: 'Agentes y Bodegas Agencias'},
    { id: 'Interbank', url: Interbank, info: 'Agentes y Bodegas Agencias'},
    { id: 'Banbif', url: Banbif, info: 'Agencias'},
    { id: 'Fullcarga', url: Fullcarga, info: 'Agentes y Bodegas Agencias'},
    { id: 'Scotiabank', url: Scotibank, info: 'Agencias' },
    { id: 'WesternUnion', url: WesternUnion, info:'Agentes y Bodegas Agencias'},
    { id: 'Kasnet', url: Kasnet, info:'Agentes'},
  ]
};

const Main = ({data}) => (
  <main className="container font-roboto">
    <Row>
      <Nav data = {data}/>
    </Row>

  </main>
)

export default Main;