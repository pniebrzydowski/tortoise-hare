import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { getRunnerName, Runner } from '../../../dummyData/runners';
import Results from '../../Results';

interface Props {
  volunteers: Runner[];
}

const RaceVolunteers: FunctionComponent<Props> = ({ volunteers }) => {
  return (
    <Results title="Volunteers" columns={["Name"]}>
      {volunteers.map((volunteer) => (
        <tr key={volunteer.id}>
          <td>
            <Link to={`/runner/${volunteer.id}`}>
              {getRunnerName(volunteer.id)}
            </Link>
          </td>
        </tr>
      ))}
    </Results>
  );
};

export default RaceVolunteers;
