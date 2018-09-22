import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { Players } from './Players';

ReactDOM.render( <CardList Players={Players}/>, document.getElementById('root'));
registerServiceWorker();
