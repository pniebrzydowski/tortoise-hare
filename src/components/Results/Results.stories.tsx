import React from 'react';

import { array, number, text } from '@storybook/addon-knobs';

import Results from './Results';

export default {
  title: "UI Components",
};

export const ResultsSection = () => {
  const title = text("Section Title", "Title");
  const cols = array("Columns", ["Column 1", "Column 2"]);
  const rowsNumber = number("Rows", 5, { min: 1, max: 10 });
  const rows = Array.from({ length: rowsNumber }, (v, k) => `Row ${k + 1}`);

  return (
    <Results title={title} columns={cols}>
      {rows.map((row) => (
        <tr key={`row-${row}`}>
          {cols.map((col) => (
            <td key={`cell-${row}-${col}`}>
              {row} {col}
            </td>
          ))}
        </tr>
      ))}
    </Results>
  );
};
