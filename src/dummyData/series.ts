import allRaces, { Race } from "./races";
import { RaceResult } from "./results";
import { getRunnerName } from "./runners";
import { getPastDate, getFutureDate } from "../utils/date";

export interface Series {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const currentSeries = {
  id: "1",
  name: "Winter 2020",
  startDate: getPastDate(),
  endDate: getFutureDate(),
  description:
    "Welcome back after Coronavirus! We are excited to be back and out there again.",
};

export const futureSeries = {
  id: "2",
  name: "Spring 2021",
  startDate: getFutureDate(1, "month"),
  endDate: getFutureDate(3, "month"),
};

export const pastSeries = {
  id: "3",
  name: "Fall 2019",
  startDate: getPastDate(5, "month"),
  endDate: getPastDate(3, "month"),
};

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
