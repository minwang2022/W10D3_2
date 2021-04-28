import * as Minesweeper from "../minesweeper.js"
import React from "react"
import Board from './board'
import Tile from './tile'

class Game extends React.Component {
    constructor(props) { 
        super(props);
    //    debugger 
        let board = new Minesweeper.Board(8,2);
        this.state = {
            board: board
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.endGame = this.endGame.bind(this);
    }

    updateGame(tile, alt) {
        if (alt) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState ({board: this.state.board})
    }

    restartGame() {
        board = new Minesweeper.Board(8,2);
        this.setState({board: board});
    }
    endGame() {
        if(this.state.board.won()) {
            return (
                <div>
                    <form className="modal-form">
                        <h1>You Win</h1>
                        <button className="js-modal-close" onClick= {this.restartGame}>Play Aagin</button>
                    </form>
                    <div className="modal-screen js-modal-close"></div>
                </div>
            ) 
        } else if (this.state.board.lost()) {
            return (
                <div>
                    <form className="modal-form">
                        <h1>You Loss</h1>
                        <button className="js-modal-close" onClick= {this.restartGame}>Play Aagin</button>
                    </form>
                    <div className="modal-screen js-modal-close"></div>
                </div>
            ) 
        } 
    }
    render() {
        return (
            <div>
                <div className="gameBoard">
                    <Board board = {this.state.board} updateGame = {this.updateGame}/>
                </div>

                {this.endGame()}
                
            </div>
        )   
    }
}

export default Game
