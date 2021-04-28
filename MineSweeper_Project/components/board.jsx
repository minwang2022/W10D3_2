import React from 'react';
import * as Minesweeper from "../minesweeper.js"

class Board extends React.Component {
    constructor(props) {
        debugger
        super(props)
    }

    render  () {
        return (
            <div>{JSON.stringify(this.props)}</div>
        )
    }

}

export default Board;