import './SumButton.css'

const Sum = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>Sumar</button>
    )
};

export default Sum;