import React from 'react';
import "./Box.css";

// Stateless react component
// Note: the {boxNumber} is ES6 feature called Destructuring Assignment
// read all about it here: http://es6-features.org/#ParameterContextMatching 
export default function Box({boxNumber,onClick}){
    let boxClass = "slider-box";
    let emptyClass = "slider-empty-box";
    return <span onClick={onClick} className={!boxNumber?emptyClass:boxClass}>{boxNumber || ""}</span>;
}