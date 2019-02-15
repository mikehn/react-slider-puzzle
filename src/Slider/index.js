import React from 'react'
import Board from './Board';
const SliderComponent = (props) => {
  return (
    <div className={"App "+props.className}>
      <header className="App-header">
        <Board {...props} />
      </header>
    </div>
  )
}
export default SliderComponent