import { ChangeEvent, FormEvent, useState } from 'react';

const useForm = <T>(initialState: T, execute: () => Promise<void>) => {
  const [states, setStates] = useState({ ...initialState });
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStates({
      ...states,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await execute();
  };
  return {
    states,
    setStates,
    onChange,
    onSubmit,
  };
};

export default useForm;
