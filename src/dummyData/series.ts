import allRaces, { Race } from './races';
import { RaceResult } from './results';
import { getRunnerName } from './runners';

export interface Series {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

const allSeries: Series[] = [
  {
    id: "1",
    name: "Winter 2020",
    startDate: "2020-11-01",
    endDate: "2021-02-28",
    description:
      "Welcome back after Coronavirus! We are excited to be back and out there again.",
  },
  {
    id: "2",
    name: "Spring 2021",
    startDate: "2021-03-01",
    endDate: "2021-05-31",
  },
];

export const getSeriesById = (id: string): Series | undefined =>
  allSeries.find((element) => element.id === id);

const getRacesForSeries = (id: string): Race[] =>
  allRaces.filter((race) => race.seriesId === id);

const getResultsForSeries = (id: string): RaceResult[] => {
  let results: RaceResult[] = [];
  const races: Race[] = getRacesForSeries(id);

  races.forEach((race) => {
    if (race.results && race.isFinished) {
      results = results.concat(race.results);
    }
  });
  return results;
};

export interface Standing {
  runnerId: string;
  runnerName: string;
  points: number;
}

interface Standings {
  [runnerId: string]: Standing;
}

export const getStandingsForSeries = (id: string): Standing[] => {
  const results: RaceResult[] = getResultsForSeries(id);
  const standings: Standings = {};

  if (!results.length) {
    return [];
  }

  results.forEach((result) => {
    if (standings[result.runnerId]) {
      standings[result.runnerId].points += result.points;
      return;
    }
    standings[result.runnerId] = {
      runnerId: result.runnerId,
      runnerName: getRunnerName(result.runnerId) || `Runner ${result.runnerId}`,
      points: result.points,
    };
  });

  const standingsArray = [];
  for (let i in standings) {
    standingsArray.push(standings[i]);
  }
  standingsArray.sort((a: Standing, b: Standing) => b.points - a.points);
  return standingsArray;
};

export default allSeries;
