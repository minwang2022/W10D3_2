import Minesweeper, {Board, Tile} from "../minesweeper"
import React from "react"

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: new Board(),
        }
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame() {

    }

    render() {
        return (
            <Board board = {this.state.board} updateGame = {this.updateGame}/>
        )
    }
}
