import './Bloco.css'
import React, { Component } from "react"

export default class Bloco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastWord: "",
            rimas: null,
            suffixRimas: "",
            textArea: "",
            textCount: "",

        }
        this.findRimas = this.findRimas.bind(this);
    }

    async findRimas() {
        let cleanText = function (word) {
            if (word !== "") return word;
        };
        let allWord = this.state.textArea.split(' ');

        //pendente filtros (enter, pontuação...)
        //quando tem espaço antes do enter, a última palavra que ele puxa é o espaço.

        let validWord = allWord.filter(cleanText);

        let lastWord = validWord[validWord.length - 1];
        this.setState({ lastWord });

        let wordSuffix = "";

        if (lastWord.length > 4) {
            wordSuffix = lastWord.slice(lastWord.length - 4);
        } else if (lastWord.length === 4) {
            wordSuffix = lastWord.slice(lastWord.length - 3);
        }
        else {
            wordSuffix = lastWord;
        }

        let url = 'https://api.dicionario-aberto.net/suffix/' + wordSuffix;
        let req = await fetch(url);
        let json = await req.json();
        this.setState({ suffixRimas: json });

        let suffixRimas = this.state.suffixRimas;

        let rimas = [];

        if (suffixRimas.error) {
            this.setState({
                textCount: <ul>
                    <h3><b>OPS! Tente novamente!</b></h3>
                    <li>Não encontramos nenhuma rima para a <b>ÚLTIMA PALAVRA DA ÚLTIMA LINHA;</b></li>
                    <li>Tente palavras com mais de 2 letras;</li>
                    <li>Confira se você <b>pulou uma linha com o "Enter"</b>, pois isso deixa a linha vazia <b>e nenhuma palavra é consultada;</b></li>
                    <li><b>Continue usando!</b> Em breve não precisará desses cuidados e as rimas serão mais qualificadas.</li>
                    
                </ul>
            })
            this.setState({ rimas: "" })
        } else {

            for (let i in suffixRimas) {
                let rima = suffixRimas[i].word;
                rimas.push(rima);
            }

            let filterRimas = [...new Set(rimas)]

            this.setState(
                {
                    rimas:
                        <ol className='rimas'>
                            {filterRimas.map(filterRimas => (
                                <li className='rima' key={filterRimas}>{filterRimas}</li>
                            ))}
                        </ol>
                });

            let count = "sua palavra pode rimar com " + filterRimas.length + " palavras";

            this.setState({ textCount: count });
        }
    }
    render() {

        let textCount = this.state.textCount;
        let rimas = this.state.rimas;

        return (
            <div>
                <div className="bloco">
                    <h2>
                        Escreva no seu bloco:
                    </h2>
                    <textarea placeholder="Faça a sua rima aqui" onChange={(event) => { this.setState({ textArea: event.target.value }) }}></textarea>
                    <input type="button" value="Buscar" onClick={this.findRimas}></input>
                    <h2>Rimas:</h2>
                    <div>
                        {textCount}
                        {rimas}
                    </div>
                </div>
            </div>
        )
    }
}

