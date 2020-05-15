import React from 'react';

import { number } from '@storybook/addon-knobs';

import { StyledTable } from './Table';

export default {
  title: "Styled Components",
};

export const Table = () => {
  const rowsNumber = number("Rows", 5, { min: 1, max: 10 });
  const colsNumber = number("Columns", 3, { min: 1, max: 5 });
  const rows = Array.from({ length: rowsNumber }, (v, k) => k + 1);
  const cols = Array.from({ length: colsNumber }, (v, k) => k + 1);

  return (
    <StyledTable>
      <thead>
        <tr>
          {cols.map((col) => (
            <th key={`heading${col}`}>Heading {col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`col${row}`}>
            {cols.map((col) => (
              <td key={`cell-${row}-${col}`}>
                Row {row} Col {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
