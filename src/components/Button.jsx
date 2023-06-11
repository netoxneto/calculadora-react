import './Button.css'

function Button(props) {
    let classes = "button ";
    classes += props.double ? "button-double" : "";
    classes += props.triple ? "button-triple" : "";
    classes += props.operation ? "button-operation" : "";

    return (
        <button
            className={classes}
            onClick={() => {
                props.click(props.label)
            }}>
            {props.label}
        </button>
    )
}

export default Button