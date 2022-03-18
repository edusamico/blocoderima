import './Bloco.css'
import Rimas from "./Rimas"

import React, {Component} from "react"


export default class Bloco extends Component {
    constructor (props) {
        super(props);
        this.state = {
            textArea: "",
            lastWord: "As rimas da última palavra do bloco aparecerá aqui"
        }
        this.findRimas = this.findRimas.bind(this);
    }
    
    findRimas() {
        
        let cleanText = function (word) {
            if (word !== "") return word;
        };

        let allWord = this.state.textArea.split(' ');
        
        //pendente filtros (enter, pontuação...)
        //quando tem espaço antes do enter, a última palavra que ele puxa é o espaço.
        let validWord = allWord.filter(cleanText);

        let lastWord = validWord[validWord.length - 1];
        this.setState({lastWord});

        console.log(lastWord);
        return lastWord;
    }

    componentDidUpdate () {
        
    }
    
    render() { 
        const { lastWord } = this.state;
        return (
            <div>
                <Rimas word ={lastWord}></Rimas>
                <div className="bloco">
                    <h2>
                        Escreve no seu bloco:
                    </h2>
                    <textarea placeholder="Faça a sua rima aqui" onChange={(event)=> {this.setState({textArea: event.target.value})}}></textarea>
                    <input type="button" value="Buscar" onClick={this.findRimas}></input>
                </div>
            </div>
        )
    }
}

