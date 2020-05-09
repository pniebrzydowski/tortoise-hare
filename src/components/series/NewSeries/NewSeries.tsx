import React, { FunctionComponent, useState } from 'react';

import DatePicker from 'react-datepicker';
import { Controller, useForm } from 'react-hook-form';

import { Series } from '../../../dummyData/series';
import {
  DEFAULT_DATEPICKER_FORMAT,
  getDateValue,
  getFutureDate,
  getToday
} from '../../../utils/date';

import 'react-datepicker/dist/react-datepicker.css';

type FormData = Partial<Omit<Series, "id">>;

const NewSeries: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, control, errors } = useForm();

  if (!visible) {
    return <button onClick={() => setVisible(true)}>Add new series</button>;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="newSeries_name">Series Name</label>
      <input
        type="text"
        id="newSeries_name"
        name="name"
        ref={register({ required: true })}
      />
      {errors.name && <span>Required</span>}

      <label htmlFor="newSeries_startDate">Start Date</label>
      <Controller
        as={DatePicker}
        name="startDate"
        id="newSeries_startDate"
        control={control}
        defaultValue={getToday()}
        valueName="selected"
        rules={{ required: true }}
        onChange={([selected]) => {
          console.log(selected);
          return getDateValue(selected);
        }}
        dateFormat={DEFAULT_DATEPICKER_FORMAT}
      />
      {errors.startDate && <span>Required</span>}

      <label htmlFor="newSeries_endDate">End Date</label>
      <Controller
        as={DatePicker}
        name="endDate"
        id="newSeries_endDate"
        control={control}
        defaultValue={getFutureDate(3, "month")}
        valueName="selected"
        rules={{ required: true }}
        onChange={([selected]) => {
          console.log(selected);
          return getDateValue(selected);
        }}
        dateFormat={DEFAULT_DATEPICKER_FORMAT}
      />
      {errors.endDate && <span>Required</span>}

      <label htmlFor="newSeries_description">Description</label>
      <textarea
        name="description"
        id="newSeries_description"
        ref={register}
      ></textarea>

      <button type="submit">Save</button>
      <button onClick={() => setVisible(false)}>Cancel</button>
    </form>
  );
};

export default NewSeries;
