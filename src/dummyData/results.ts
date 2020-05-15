export interface RaceResult {
  id: string;
  raceId: string;
  runnerId: string;
  predictedTime?: number;
  actualTime?: number;
  points: number;
}

export const race1results: RaceResult[] = [
  {
    id: "1",
    raceId: "1",
    runnerId: "1",
    predictedTime: 1080,
    actualTime: 1095,
    points: 0,
  },
  {
    id: "2",
    raceId: "1",
    runnerId: "2",
    predictedTime: 1120,
    actualTime: 1100,
    points: 5,
  },
  {
    id: "3",
    raceId: "1",
    runnerId: "3",
    predictedTime: 1200,
    actualTime: 1145,
    points: 10,
  },
];

const allResults = [...race1results];

export const getResultsForRace = (raceId: string): RaceResult[] | undefined =>
  allResults.filter((element) => element.raceId === raceId);

export const getResultsForRunner = (
  runnerId: string
): RaceResult[] | undefined =>
  allResults.filter((element) => element.runnerId === runnerId);
