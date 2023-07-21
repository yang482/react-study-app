import React from 'react';

import _ from 'lodash';

import { Square } from 'components/tic-tac-toe/square-component';

class Board extends React.Component {
  renderSquare(i) {
    /*
    loop 코드로 변경 되었기 때문에 key 추가
    */
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => { 
            /*
            원래는 없는 내용이나 lodash 를 활용해 onclick 핸들러 확인
            */
            if(!_.isFunction(this.props.onClick)) {
              return;
            }
            return this.props.onClick(i);
          }
        }
      />
    );
  }

  render() {
    return (
      <div>
        {
          /* 
          lodash를 활용하여 중복 코드 제거
          _.range(9) : 0 ~ 8 까지의 값을 가지는 길이 9의 배열 생성
          _.chunk(list, 3) : list 를 3개씩 잘라서 순서대로 저장한 배열
          JSX내에서 반복문을 쓸때는 .map을 활용하거나 function을 통해서 만들어 와야한다.
          */
          _.chunk(_.range(9), 3).map((subList, index) => 
            <div className="board-row" key={index}>
              {
                subList.map(square => this.renderSquare(square))
              }
            </div>
          )
        }
        {/*
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        */}
      </div>
    );
  }
}

export { Board };