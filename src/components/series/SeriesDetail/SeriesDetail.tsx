import React, { FunctionComponent } from "react";

import styled from "styled-components";

import useDocData from "../../../firebase/hooks/useDocData";
import { formatDate } from "../../../utils/date";
import { Series } from "../../../dummyData/series";

interface Props {
  id: string;
}

const StyledSection = styled("section")`
  & > * + * {
    margin: ${(props) => props.theme.spacing.small} 0;
  }
`;

const StyledDatesHeader = styled("th")`
  font-weight: bold;
  padding-right: ${(props) => props.theme.spacing.medium};
`;

const StyledDescription = styled("p")`
  color: ${(props) => props.theme.colors.secondary};
`;

const SeriesDetail: FunctionComponent<Props> = ({ id }) => {
  const { data: series, loading } = useDocData<Series>({
    collection: "series",
    id,
  });

  if (!series || loading) {
    return null;
  }

  return (
    <StyledSection>
      <header>
        <h2>{series.name}</h2>
      </header>
      <table>
        <tbody>
          <tr>
            <StyledDatesHeader>Start:</StyledDatesHeader>
            <td>{formatDate(series.startDate)}</td>
          </tr>
          <tr>
            <StyledDatesHeader>End:</StyledDatesHeader>
            <td>{formatDate(series.endDate)}</td>
          </tr>
        </tbody>
      </table>
      {series.description && (
        <StyledDescription>{series.description}</StyledDescription>
      )}
    </StyledSection>
  );
};

export default SeriesDetail;
