import { useState } from 'react';

export const useForm = (submitCallback: any) => {

  const [state, setState] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e: any) => {
    e.persist();
    setState((state: any) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return [state, handleChange, handleSubmit];

};
