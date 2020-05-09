import React, { FunctionComponent, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';

import { Series } from '../../../dummyData/series';
import { getFutureDate, getToday } from '../../../utils/date';
import Datepicker from '../../form/fields/Datepicker';
import Text from '../../form/fields/Text';
import Textarea from '../../form/fields/Textarea';

import 'react-datepicker/dist/react-datepicker.css';

type FormData = Partial<Omit<Series, "id">>;

const NewSeries: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const form = useForm();

  if (!visible) {
    return <button onClick={() => setVisible(true)}>Add new series</button>;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Text
          formName="newSeries"
          fieldName="name"
          label="Series Name"
          required
          error={form.errors.name && "Please enter a name"}
        />

        <Datepicker
          formName="newSeries"
          fieldName="startDate"
          label="Start Date"
          defaultValue={getToday()}
          required
          error={form.errors.startDate && "Please enter a start date"}
        />

        <Datepicker
          formName="newSeries"
          fieldName="endDate"
          label="End Date"
          defaultValue={getFutureDate(3, "month")}
          required
          error={form.errors.endDate && "Please enter a start date"}
        />

        <Textarea
          formName="newSeries"
          fieldName="description"
          label="Description"
        />

        <button type="submit">Save</button>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </form>
    </FormContext>
  );
};

export default NewSeries;
