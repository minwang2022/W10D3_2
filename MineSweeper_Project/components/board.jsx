import React from 'react';
import * as Minesweeper from "../minesweeper.js"
import Tile from "./tile"

class Board extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.rowCreator = this.rowCreator.bind(this)
    }

    rowCreator() {
        const newBoard = this.props.board;
        return (newBoard.grid.map( (row, idx) => {

            return (<div className="row" key={idx}>{row.map((tile, idx2) => {
               return (< Tile key ={idx2} tileObj={tile} updateGame={this.props.updateGame} />)
            }
            )}
            </div>)
         }))
    }

    render  () {
        // debugger;
        return (
            <div>
                {this.rowCreator()}
            </div>
        )
    }

}

export default Board;