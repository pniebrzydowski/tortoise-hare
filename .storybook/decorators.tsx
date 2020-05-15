import React, { ReactNode } from 'react';

import { FormContext, useForm } from 'react-hook-form';

export const FormWrapper = (storyFn: () => ReactNode) => {
  const form = useForm();
  return <FormContext {...form}>{storyFn()}</FormContext>;
};
