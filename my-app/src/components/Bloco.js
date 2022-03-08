import './Bloco.css';
import React, {Component} from "react"

export default class Bloco extends Component{
    constructor (props) {
        super(props);

        this.state = {
            lastWord: "",
            selectedWord: ""
        }

        this.findRimas = this.findRimas.bind(this);
    }

    findRimas() {
        console.log(this.state.lastWord);
    }

    render() {
        return (
            <div className="bloco">
                <h2>
                    Escreve no seu bloco:
                </h2>
                <textarea onChange={(event)=> {this.setState({lastWord: event.target.value})}}></textarea>
                <input type="button" value="Buscar" onClick={this.findRimas}></input>

            </div>
        )
    }
}