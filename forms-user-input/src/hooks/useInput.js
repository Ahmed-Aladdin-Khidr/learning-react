import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [input, setInput] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(input);

  function handleInputChange(event) {
    setInput((input) => event.target.value);
    setDidEdit(false);
  }
  function handleInputBlur(identifier) {
    setDidEdit(true);
  }
  return {
    value: input,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
 