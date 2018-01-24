import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });  
  }

  renderSquare(i) {
    return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <h1>3D Tic-Tac-Toe</h1>
        <h3>Match 3 in a row vertically, horizontally,<br/>
         or across all three boards to win.</h3>
        <div className="status">{status}</div>
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
        <br/>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
        <div className="board-row">
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <br/>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="board-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        </div>
        <div className="board-row">
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
        </div>
        <br/>
        <input type="button" value="New Game" onClick={refreshPage} />
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

    /* win conditions on the second playing board */
    [9, 10, 11],
    [12, 13, 14],
    [15, 16, 17],
    [9, 12, 15],
    [10, 13, 16],
    [11, 14, 17],
    [9, 13, 17],
    [11, 13, 15],

    /* win conditions on the third playing board  */
    [18, 19, 20],
    [21, 22, 23],
    [24, 25, 26],
    [18, 21, 24],
    [19, 22, 25],
    [20, 23, 26],
    [18, 22, 26],
    [20, 22, 24],

    /* vertical win conditions across all boards */
    [0, 9, 18],
    [1, 10, 19],
    [2, 11, 20],
    [3, 12, 21],
    [4, 13, 22],
    [5, 14, 23],
    [6, 15, 24],
    [7, 16, 25],
    [8, 17, 26],

    /* cross win coniditions across all boards */
    [0, 10, 20],
    [0, 12, 24],
    [0, 13, 26],
    [1, 13, 25],
    [2, 13, 24],
    [2, 14, 26],
    [2, 10, 18],
    [3, 13, 23],
    [5, 13, 21],
    [6, 12, 18],
    [6, 16, 26],
    [6, 13, 20],
    [7, 13, 19],
    [8, 14, 20],
    [8, 16, 24],
    [8, 13, 18],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

function refreshPage(){
  window.location.reload();
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
