import React, { Children, isValidElement, cloneElement } from 'react';

import useForm from './useForm';

import './form.css';

const Form = props => {
    const { 
        defaultFormState, 
        handleSubmit, 
        buttonText, 
        heading,
        submissionErrorMsg,
        children
    } = props


    const [
        formState, 
        handleChange, 
        clearState
    ] = useForm(defaultFormState);

    const addPropsToChildren = Children.map(children, child => {
        if (isValidElement(child)) {
            return cloneElement(child, {
                state: formState,
                handleChange: handleChange
            })
        }
        return child;
    });

    const submit = e => {
        e.preventDefault();
        handleSubmit(formState);
        clearState(defaultFormState);
    }

    return (
        <div className="Form">
            <div className="Form-Header">{heading}</div>
            
            <form onSubmit={submit}>
                <div className="Form-Inputs">
                    {addPropsToChildren}
                </div>

                <div>
                    {submissionErrorMsg}
                </div>
                
                <button className="Form-Button" type="submit">{buttonText}</button>
            </form>
            
        </div>
       
    )
}

export default Form;