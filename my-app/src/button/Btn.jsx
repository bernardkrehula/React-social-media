import './Btn.css'

const Btn = ({onClick, variation, children}) => {

    return(
        <button className={`btn ${variation}`} onClick={onClick}>{children}</button>
    )
}

export default Btn;