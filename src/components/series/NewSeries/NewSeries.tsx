import React, { FunctionComponent, SyntheticEvent, useState } from 'react';

const NewSeries: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);

  if (!visible) {
    return <button onClick={() => setVisible(true)}>Add new series</button>;
  }

  return (
    <form
      onSubmit={(e: SyntheticEvent) => {
        e.preventDefault();
        console.log("form submit");
      }}
    >
      <label>Series Name</label>
      <input name="name" type="text" />

      <label>Start Date</label>
      <input name="startDate" type="text" />

      <label>End Date</label>
      <input name="endDate" type="text" />

      <label>Description</label>
      <textarea name="description"></textarea>

      <button type="submit">Save</button>
      <button onClick={() => setVisible(false)}>Cancel</button>
    </form>
  );
};

export default NewSeries;
