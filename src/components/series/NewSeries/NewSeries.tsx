import React, { FunctionComponent, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';

import { Series } from '../../../dummyData/series';
import { getFutureDate, getToday } from '../../../utils/date';
import Datepicker from '../../form/fields/Datepicker/Datepicker';

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
        <label htmlFor="newSeries_name">Series Name</label>
        <input
          type="text"
          id="newSeries_name"
          name="name"
          ref={form.register({ required: true })}
        />
        {form.errors.name && <span>Please enter a name</span>}

        <Datepicker
          formName="newSeries"
          fieldName="startDate"
          label="Start Date"
          defaultValue={getToday()}
          required
          error={form.errors.startDate}
        />

        <Datepicker
          formName="newSeries"
          fieldName="endDate"
          label="End Date"
          defaultValue={getFutureDate(3, "month")}
          required
          error={form.errors.endDate}
        />

        <label htmlFor="newSeries_description">Description</label>
        <textarea
          name="description"
          id="newSeries_description"
          ref={form.register}
        ></textarea>

        <button type="submit">Save</button>
        <button onClick={() => setVisible(false)}>Cancel</button>
      </form>
    </FormContext>
  );
};

export default NewSeries;
