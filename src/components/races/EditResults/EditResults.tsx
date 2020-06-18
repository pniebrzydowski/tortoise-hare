import React, { FunctionComponent } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerName } from '../../../dummyData/runners';
import routes from '../../../routing/routes';
import { formatTime } from '../../../utils/date';
import Time from '../../form/fields/Time';
import Results from '../../Results';
import { OutlineButton, PrimaryButton } from '../../ui/Button';

interface Props {
  results: RaceResult[];
  raceId: string;
}

const StyledButtonContainer = styled("div")`
  margin-top: ${(props) => props.theme.spacing.medium};

  button + button {
    margin-left: ${(props) => props.theme.spacing.medium};
  }
`;

const EditResults: FunctionComponent<Props> = ({ results, raceId }) => {
  const form = useForm();
  const history = useHistory();

  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    if (!a.predictedTime || !b.predictedTime) {
      return 0;
    }
    return a.predictedTime - b.predictedTime;
  });

  const backToRaceDetail = () => {
    history.push(routes.RACE_DETAIL.replace(":raceId", raceId));
  };

  const onSubmit = (data: any) => {
    console.log(data);
    backToRaceDetail();
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="hidden"
          id="results_raceId"
          name="raceId"
          value={raceId}
          ref={form.register({ required: true })}
        />
        <Results columns={["Name", "Predicted Time", "Actual Time"]}>
          {sortedResults.map((result) => (
            <tr key={result.id}>
              <td>
                <Link to={`/runner/${result.runnerId}`}>
                  {getRunnerName(result.runnerId)}
                </Link>
              </td>
              <td>
                {result.predictedTime && formatTime(result.predictedTime)}
              </td>
              <td>
                <Time
                  formName="results"
                  fieldName={`runner_${result.runnerId}`}
                  defaultValue={formatTime(result.actualTime)}
                  error={
                    form.errors[`runner_${result.runnerId}`] &&
                    "Please enter a time"
                  }
                />
              </td>
            </tr>
          ))}
        </Results>
        <StyledButtonContainer>
          <PrimaryButton type="submit">
            Complete Race and Calculate Points
          </PrimaryButton>
          <OutlineButton onClick={() => backToRaceDetail()}>
            Cancel
          </OutlineButton>
        </StyledButtonContainer>
      </form>
    </FormContext>
  );
};

export default EditResults;
