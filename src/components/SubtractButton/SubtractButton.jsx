import './SubtractButton.css'

const Subtract = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>Restar</button>
    )
};

export default Subtract;