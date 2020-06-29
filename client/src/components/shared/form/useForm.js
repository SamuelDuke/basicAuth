import { useState } from "react";

const useForm = defaultState => {
  const [state, setState] = useState(defaultState);

  const handleChange = stateValue => e => {
    setState({ ...state, [stateValue]: e.target.value });
  };

  const clearState = defaultState => {
    setState(defaultState);
  };

  return [state, handleChange, clearState];
};

export default useForm;