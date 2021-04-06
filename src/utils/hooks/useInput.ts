import { useState } from "react";

export function useInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue("");
  };
  const bind = {
    value,
    onChange: (e: any) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
}
