import React from 'react';
import Board from './Board';

const SliderComponent = props => {
  return React.createElement("div", {
    className: "App " + props.className
  }, React.createElement("header", {
    className: "App-header"
  }, React.createElement(Board, props)));
};

export default SliderComponent;