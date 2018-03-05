import React from 'react';
import 'App.css';
import { Header } from 'components';

const Background = (props) => (
  <div>
    <Header title={props.abc}/>
    <div className="container" >
      {props.children}
    </div>
  </div>
);


export default Background;
