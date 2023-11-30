import { useState } from "react";
import Input from "../input";
import Preview from "../Preview";
import Button from "../Button";

const Wrapper = () => {
    const [value, setValue] = useState("");
    const handleOnChange = (e) => {
        setValue(e.target.value)
    }

    const handleResetValue = () => {
        setValue("")
    }

    return (
        <>
            <Input value={value} handleOnChange = {handleOnChange}/>
            <Preview value={value}/>
            <Button onClick={handleResetValue}></Button>
            {/* <button style={{padding: '1em'}} onClick={handleResetValue}>reset</button> */}
        </>
    )
}

export default Wrapper;