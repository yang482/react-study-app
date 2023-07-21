import React from 'react';

class SquareClass extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

/******** export는 외부에서 해당 내용을 import 할수 있게 해준다. ********/ 

/*
export default 키워드는 import 시 이름을 마음대로 지정 가능하다.
default는 한 js파일에서 한번만 지정 가능하다.
ex ) 
import Sq from 'assets/components/tic-tac-toe/square-component';
*/
export default Square;

/*
exprt {} 키워드는 import 시의 이름을 강제한다.
as 키워드로 Alias 지정 가능
ex ) 
import { Square, SquareFunction, SquareClass } from 'assets/components/tic-tac-toe/square-component';
*/
export { Square, Square as SquareFunction, SquareClass };