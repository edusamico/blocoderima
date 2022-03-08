import './Rimas.css';

import React, {Component} from "react"

export default class Rimas extends Component {
    render() {
        return (
            <div className="rimas">
                <h2>
                    Rimas:
                </h2>
                <div className='rima'>Palavra que rima</div>
                <div className='rima'>Palavra que rima</div>
                <div className='rima'>Palavra que rima</div>
            </div>
        )
    }
}
