import React, { FunctionComponent } from 'react';

interface Props {
  id: string;
}

const SeriesDetail: FunctionComponent<Props> = ({ id }) => {
  return (
    <article>
      <header>
        <h2>Series {id}</h2>
      </header>
    </article>
  );
};

export default SeriesDetail;
