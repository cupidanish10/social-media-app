import { useState } from "react";

const useForm = ()=> {

    const [ userInput, setUserInput ] = useState({
        title: '',
        caption: ''
    });

    const handleInput = (e) => {
        setUserInput( {...userInput, [e.target.name]: e.target.value })
    }


    return [ userInput, handleInput]
}

export default useForm;