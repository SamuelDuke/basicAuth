import { useState } from "react";

const useFormValues = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState(false);
  
  return [errorMessage, setErrorMessage, inputError, setInputError];
};

export default useFormValues;