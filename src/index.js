import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InputEle from './form/fns_input_ctrl';
import CondRender from './basic/conditional_rendering';
import RoutingBasic from './routing/routing_basic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <InputEle/>
    // <CondRender/>
    <RoutingBasic/>
);

