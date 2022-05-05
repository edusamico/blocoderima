import './Bloco.css'
import React, { Component } from "react"
import Button from '../Button/Button';
import Rimas from '../Rimas/Rimas';
import { api } from '../../Service/api';


export default class Bloco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastWord: "",
            suffixRimas: [],
            textArea: "",
            textCount: "",
            loading: false
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
            alert("A palavra precisa ter mais de 2 letras. Tente novamente.")
            return;
        }
        this.setState({loading: true})
        let json = await api.getSuffixRimas(wordSuffix);
        this.setState({loading: false})
        this.setState({ suffixRimas: json });


    }

    handleClick = () => {this.findRimas()};
    handleOnChange = (event) => { this.setState({ textArea: event.target.value }) };
    
    render() {
        let loading = (this.state.loading) ? true : false;
        let showRimas = (this.state.lastWord) ? true : false;    
        let suffixRimas = this.state.suffixRimas;

        return (
            <div>
                <div className="bloco">
                    <h2>
                        Escreva no seu bloco:
                    </h2>
                    <textarea placeholder="Faça a sua rima aqui" onChange={this.handleOnChange}></textarea>
                    
                    <Button 
                        onClick={(this.handleClick)} 
                        textArea={(loading) ? "Carregando...":"Buscar"}
                    />

                    {!loading && showRimas && <Rimas suffixRimas={suffixRimas}/>}
                    
                    

                </div>
            </div>
        )
    }
}

//