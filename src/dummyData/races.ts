import { race1results, RaceResult } from './results';

enum DistanceUnit {
  "km" = "kilometers",
  "mi" = "miles",
}

export interface Race {
  id: string;
  seriesId: string;
  name: string;
  startTime: number;
  distance: number;
  unit: DistanceUnit;
  description?: string;
  results?: RaceResult[];
}

const series1Races: Race[] = [
  {
    id: "1",
    seriesId: "1",
    name: "Stoney Creek 5k",
    startTime: 1604235600000, // 2020-11-01 13:00 GMT
    distance: 5,
    unit: DistanceUnit.km,
    description: "This is going to be a fun race!",
    results: race1results,
  },
  {
    id: "2",
    seriesId: "1",
    name: "Stoney Creek 10k",
    startTime: 1604235600000, // 2020-11-08 13:00 GMT
    distance: 10,
    unit: DistanceUnit.km,
    description: "Good luck :-)",
  },
];

const series2Races: Race[] = [
  {
    id: "3",
    seriesId: "2",
    name: "Utica 5k",
    startTime: 1604235600000, // 2020-11-01 13:00 GMT
    distance: 5,
    unit: DistanceUnit.km,
  },
  {
    id: "4",
    seriesId: "2",
    name: "Utica 10 mile",
    startTime: 1604235600000, // 2020-11-01 13:00 GMT
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
