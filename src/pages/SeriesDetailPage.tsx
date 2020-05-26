import React, { FunctionComponent } from 'react';

import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import NewRace from '../components/races/NewRace';
import RaceList from '../components/races/RaceList';
import SeriesDetail from '../components/series/SeriesDetail';
import SeriesStandings from '../components/series/SeriesStandings';

const StyledLink = styled(Link)`
  padding-top: ${(props) => props.theme.spacing.small};
  padding-bottom: ${(props) => props.theme.spacing.small};
  text-decoration: none;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const StyledFlexBox = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    & > * {
      margin-top: 0;
      width: 100%;
    }
    & > * + * {
      margin-left: ${(props) => props.theme.spacing.xLarge};
    }
  }
`;

const StyledFlexContainer = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
`;

const SeriesDetailPage: FunctionComponent = () => {
  const { seriesId } = useParams();

  if (!seriesId) {
    return null;
  }

  return (
    <>
      <nav>
        <StyledLink to="/series">&lt; Back to All Series</StyledLink>
      </nav>

      <SeriesDetail id={seriesId} />

      <StyledFlexBox>
        <StyledFlexContainer>
          <RaceList seriesId={seriesId} />
          <NewRace seriesId={seriesId} />
        </StyledFlexContainer>
        <SeriesStandings seriesId={seriesId} />
      </StyledFlexBox>
    </>
  );
};

export default SeriesDetailPage;
