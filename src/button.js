import './button.css'

const Button = (props) => {
    return(

        <div className="button-container">
            <button className='button' onClick={props.callApi}>click to generate a joke</button>
        </div>

    )
}

export default Button