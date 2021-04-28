import React from 'react';
import * as Minesweeper from "../minesweeper.js"

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.tileValue = this.tileValue.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    tileValue() {
        const currTile = this.props.tileObj;
        let tileClass;
        if (currTile.explored) {
            if (currTile.bombed) {
                return ['\u2622', 'bombed tile'];
            } else {
                let count = currTile.adjacentBombCount();
                let look = count > 0 ? `${count} ` : "";
                return [look, 'revealed tile'];
            }
        } else if (currTile.flagged) {
            return ['\u2691', 'flagged tile']  ;
        } else {
            return ["  ", 'empty tile'];
        }
    }

    handleClick(event) {
        // debugger
        this.props.updateGame(this.props.tileObj, event.altKey)
    }

    render  () {
        let value = this.tileValue();
        return (
            <div onClick= {this.handleClick} className={value[1]}>{value[0]}</div>
        )
    }

}

export default Tile;