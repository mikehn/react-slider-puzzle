import React from 'react';
import PropTypes from 'prop-types';

// Stateless react component
// Note: the {boxNumber} is ES6 feature called Destructuring Assignment
// read all about it here: http://es6-features.org/#ParameterContextMatching 
export default function Box({boxNumber,onClick}){
    const EMPTY_CLASS="empty"
    return <span onClick={onClick} className={!boxNumber?EMPTY_CLASS:null}>{boxNumber || ""}</span>;
}

Box.propTypes = {
    onClick: PropTypes.func.isRequired,
    boxNumber: PropTypes.number.isRequired
};