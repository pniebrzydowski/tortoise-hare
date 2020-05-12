enum DistanceUnit {
  "km",
  "mi",
}

interface RaceResult {
  id: string;
  raceId: string;
  predictedTime?: number;
  time?: number;
  points?: number;
}

export interface Race {
  id: string;
  seriesId: string;
  name: string;
  startTime: number;
  distance: number;
  unit: DistanceUnit;
  hasResults?: boolean;
  description?: string;
  results?: RaceResult;
}

const series1Races: Race[] = [
  {
    id: "1",
    seriesId: "1",
    name: "Stoney Creek 5k",
    startTime: 1604239200000, // 2020-11-01 14:00
    distance: 5,
    unit: DistanceUnit.km,
    description: "This is going to be a fun race!",
  },
  {
    id: "2",
    seriesId: "1",
    name: "Stoney Creek 10k",
    startTime: 1604239200000, // 2020-11-08 14:00
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
    startTime: 1604239200000, // 2020-11-01 14:00
    distance: 5,
    unit: DistanceUnit.km,
  },
  {
    id: "4",
    seriesId: "2",
    name: "Utica 10 mile",
    startTime: 1604239200000, // 2020-11-08 14:00
    distance: 10,
    unit: DistanceUnit.mi,
    description: "Long one!",
  },
];

const allRaces: Race[] = [...series1Races, ...series2Races];

export const getRacesForSeries = (seriesId: string): Race[] | undefined =>
  allRaces.filter((element) => element.seriesId === seriesId);

export default allRaces;
