import React, { useState } from "react";
import "./style.css"

const Input = ({value, handleOnChange}) => {
    return(
        <Input
            className = "styleInput"
            placeHolder = "example: John Doe"
            value={value}
            onChange={handleOnChange}
        />
    )
}

export default Input;