import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setformState] = useState(initialValue);

  const onclickChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };


  const ResetValue = ()=>{
    setformState(initialValue)
  }

  return {
    formState,
    onclickChange,
    ResetValue
  };
};
