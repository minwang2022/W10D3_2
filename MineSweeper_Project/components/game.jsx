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
    }

    updateGame() {

    }

    render() {
        return (
            <div className="gameBoard">
                <Board board = {this.state.board} updateGame = {this.updateGame}/>
            </div>
        )   
    }
}

export default Game
