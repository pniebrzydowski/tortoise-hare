import React, { FunctionComponent, useState } from 'react';

import { useForm } from 'react-hook-form';

import { Series } from '../../../dummyData/series';
import { getFutureDate, getToday } from '../../../utils/date';

type FormData = Partial<Omit<Series, "id">>;

const NewSeries: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, errors } = useForm();

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
      <input
        type="text"
        id="newSeries_startDate"
        name="startDate"
        defaultValue={getToday()}
        ref={register}
      />
      {errors.startDate && <span>Required</span>}

      <label htmlFor="newSeries_endDate">End Date</label>
      <input
        type="text"
        name="endDate"
        id="newSeries_endDate"
        defaultValue={getFutureDate(3, "month")}
        ref={register}
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
