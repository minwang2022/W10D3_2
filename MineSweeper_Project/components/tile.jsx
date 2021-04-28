import React from 'react';
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
    constructor(props) {
        super(props)
    }

    render  () {
        return (
            <div>{this.props}</div>
        )
    }

}

export default Tile;