import "./Button.css"

const Button = ({ textArea, onClick }) => {
    return (
        <input
            type="button"
            value={textArea}
            onClick={onClick}>
        </input>
    )
}

export default Button;
