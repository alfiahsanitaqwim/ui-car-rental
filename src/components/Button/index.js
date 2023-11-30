import { string } from "prop-types";

const Button = ({type, color, children}) => {
    return(
        <button type={type} color={color}>
            {children}
        </button>
    )
};

Button.defaultProps = {
    type: "button",
    color: "primary"
}

Button.propTypes = {
    type: string,
    color: string,
    children: node.isRequired
}

export default Button;