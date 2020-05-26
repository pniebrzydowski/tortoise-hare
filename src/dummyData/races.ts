import { race1results, race2results, RaceResult } from './results';
import { allVolunteers, Runner } from './runners';

export enum DistanceUnit {
  "km" = "km",
  "mi" = "mi",
}

export interface Race {
  id: string;
  seriesId: string;
  name: string;
  startTime: string;
  distance: number;
  unit: DistanceUnit;
  description?: string;
  isFinished?: boolean;
  results?: RaceResult[];
  volunteers?: Runner[];
}

const series1Races: Race[] = [
  {
    id: "1",
    seriesId: "1",
    name: "Stoney Creek 5k",
    startTime: "2020-11-01 08:00",
    distance: 5,
    unit: DistanceUnit.km,
    description: "This is going to be a fun race!",
    isFinished: true,
    results: race1results,
    volunteers: allVolunteers,
  },
  {
    id: "2",
    seriesId: "1",
    name: "Stoney Creek 10k",
    startTime: "2020-11-08 13:00",
    distance: 10,
    unit: DistanceUnit.km,
    description: "Good luck :-)",
    results: race2results,
    volunteers: [allVolunteers[0], allVolunteers[1]],
  },
];

const series2Races: Race[] = [
  {
    id: "3",
    seriesId: "2",
    name: "Utica 5k",
    startTime: "2021-03-23 08:00",
    distance: 5,
    unit: DistanceUnit.km,
  },
  {
    id: "4",
    seriesId: "2",
    name: "Utica 10 mile",
    startTime: "2021-04-01 13:00",
    distance: 10,
    unit: DistanceUnit.mi,
    description: "Long one!",
  },
];

const allRaces: Race[] = [...series1Races, ...series2Races];

export const getRaceById = (raceId: string): Race | undefined =>
  allRaces.find((element) => element.id === raceId);

export const getRacesForSeries = (seriesId: string): Race[] | undefined =>
  allRaces.filter((element) => element.seriesId === seriesId);

export default allRaces;
