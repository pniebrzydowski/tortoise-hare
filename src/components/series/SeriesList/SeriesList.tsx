import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import allSeries from '../../../dummyData/series';

const SeriesList: FunctionComponent = () => {
  return (
    <section>
      <header>
        <h2>All Series</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allSeries.map((series) => (
              <tr key={series.id}>
                <td>{series.name}</td>
                <td>{series.startDate}</td>
                <td>{series.endDate}</td>
                <td>
                  <Link to={`/series/${series.id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </section>
  );
};

export default SeriesList;
