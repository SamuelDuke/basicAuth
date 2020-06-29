import React from "react";

import useInputErrors from './useFormInput';

import './formInput.css';

const FormInput = props => {

  const [errorMessage, setErrorMessage, inputError, setInputError] = useInputErrors();

  const {
    id,
    label,
    state,
    name,
    handleChange,
    type,
    placeholder,
    required
  } = props;
  
  let newName = "";
  if (!name) {
    newName = id;
  } else {
    newName = name;
  }

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const validEmail = (email) => {
    return email.match(emailFormat);
  };
  
  const validation = () => {
    if (required && state[id] === "") {
      setInputError(true)
      return setErrorMessage('This field must be filled in.');
    }

    if (type === "email") {
      if (!validEmail(state[id])) {
        setInputError(true)
        return setErrorMessage('That is not a valid emial');
      }
    }
    setInputError(false);
    return setErrorMessage('');
  }




  return (
    <div className={inputError ? 'FormInput-Error' : 'FormInput'}>
        <label htmlFor={id}>{label}{required ? " *":''} </label>

        <input 
            className="Input-Control"
            id={id}
            name={newName}
            value={state[id]}
            type={type}
            placeholder={placeholder}
            onChange={handleChange(id)}
            onBlur={validation}
        />
        {<div className="FormInput-ErrorMessage">{errorMessage}</div>}

    </div>
    
  );
};

export default FormInput;