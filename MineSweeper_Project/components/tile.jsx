import React from 'react';
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.tileValue = this.tileValue.bind(this)
    }

    tileValue() {
        const currTile = this.props.tileObj;
        let tileClass;
        if (currTile.explored) {
            if (currTile.bombed) {
                return ['💣', 'bombed tile'];
            } else {
                return [currTile.adjacentBombCount(), 'revealed tile'];
            }
        } else if (currTile.flagged) {
            return ['⚑', 'flagged tile']  ;
        } else {
            return ['_', 'empty tile'];
        }
    }

    render  () {
        let value = this.tileValue();
        return (
            <div className={value[1]}>{value[0]}</div>
        )
    }

}

export default Tile;