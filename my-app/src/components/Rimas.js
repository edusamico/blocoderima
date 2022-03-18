
//irá receber 1 palavra por vez e retornar uma lista de rimas
import './Rimas.css';

const Rimas = (props) => {
const word = props.word;

return (
    <div className="rimas">
        <h2>
            Rimas:
        </h2>
        <div className='rima'>{word}</div>
    </div>
)
}
export default Rimas;