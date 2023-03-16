import { useEffect, useState } from "react";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
  return re.test(email);
};

export const useValidation = (value, validators) => {

  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    for (const validator in validators) {
      switch (validator) {
        case 'minLength':
          value.length < validators[validator] ? setMinLengthError(true) : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          setEmailError(!validateEmail(value));
          break;
        case 'isPhone':
          const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
          phoneRegExp.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true);
          break;
        default:
          break;
      }

    }
  }, [value, validators]);

  useEffect(() => {
    if (emailError) {
      setErrorMessage('Incorrect email address');
    }
    if (phoneError) {
      setErrorMessage('Incorrect phone number');
    }
    if (minLengthError) {
      setErrorMessage('Value is too short');
    }
    if (isEmpty) {
      setErrorMessage('This field is required');
    }
  }, [isEmpty, minLengthError, emailError, phoneError]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError || phoneError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, emailError, phoneError])

  return {
    inputValid,
    errorMessage
  }
}