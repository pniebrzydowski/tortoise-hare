import React, { FunctionComponent } from 'react';

import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import RaceList from '../components/races/RaceList';
import SeriesDetail from '../components/series/SeriesDetail';

const StyledLink = styled(Link)`
  padding-top: ${(props) => props.theme.spacing.small};
  padding-bottom: ${(props) => props.theme.spacing.small};
  text-decoration: none;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.small};
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
      <RaceList seriesId={seriesId} />
    </>
  );
};

export default SeriesDetailPage;
