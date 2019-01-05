import React from 'react'; // Stateless react component
// Note: the {boxNumber} is ES6 feature called Destructuring Assignment
// read all about it here: http://es6-features.org/#ParameterContextMatching 

export default function Box({
  boxNumber,
  onClick
}) {
  const EMPTY_CLASS = "empty";
  return React.createElement("span", {
    onClick: onClick,
    className: !boxNumber ? EMPTY_CLASS : null
  }, boxNumber || "");
}