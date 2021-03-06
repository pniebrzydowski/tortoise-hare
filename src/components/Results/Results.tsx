import React, { FunctionComponent } from 'react';

import { StyledTable } from '../ui/Table';

interface Props {
  title?: string;
  columns: string[];
}

const Results: FunctionComponent<Props> = ({ title, columns, children }) => (
  <section>
    {title && <h3>{title}</h3>}
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </StyledTable>
  </section>
);

export default Results;
