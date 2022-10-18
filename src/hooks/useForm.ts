import { ChangeEvent, useEffect, useState } from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSelectChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onTextareaChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,

    onInputChange,
    onResetForm,
    onSelectChange,
    onTextareaChange,
  };
};
