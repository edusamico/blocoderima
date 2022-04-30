import './Bloco.css'
import React, { Component } from "react"
import Button from '../Button/Button';
import Rimas from '../Rimas/Rimas';


export default class Bloco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastWord: "",
            suffixRimas: [],
            textArea: "",
            textCount: "",

        }
        this.findRimas = this.findRimas.bind(this);
    }
    async findRimas() {
        if (this.state.textArea === "") return;

        let cleanText = function (word) {
            if (word !== " ") return word;
        };

        let allWord = this.state.textArea.replace(/\n/g, ' ').split(' ');

        let validWord = allWord.filter(cleanText);

        let lastWord = validWord[validWord.length - 1];
        this.setState({ lastWord });

        let wordSuffix = "";

        if (lastWord.length > 3) {
            wordSuffix = lastWord.slice(lastWord.length - 3);
        } else if (lastWord.length === 3) {
            wordSuffix = lastWord;
        }
        else {
            return;
        }

        let url = 'https://api.dicionario-aberto.net/suffix/' + wordSuffix;
        let req = await fetch(url);
        let json = await req.json();
        this.setState({ suffixRimas: json });


    }

    handleClick = () => {this.findRimas()};
    handleOnChange = (event) => { this.setState({ textArea: event.target.value }) }

    render() {
        
        let suffixRimas = this.state.suffixRimas;

        return (
            <div>
                <div className="bloco">
                    <h2>
                        Escreva no seu bloco:
                    </h2>
                    <textarea placeholder="Faça a sua rima aqui" onChange={this.handleOnChange}></textarea>
                    
                    <Button onClick={(this.handleClick)} textArea={"Buscar"}/>
                    <Rimas suffixRimas={suffixRimas}/>
                    

                </div>
            </div>
        )
    }
}

//