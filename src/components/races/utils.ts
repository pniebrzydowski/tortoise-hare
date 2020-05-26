import allRaces, { getRaceById, Race } from '../../dummyData/races';
import { RaceResult } from '../../dummyData/results';
import { getDateValue, getToday, sortByDate } from '../../utils/date';

export const getRunnerResultForRace = (
  runnerId: string,
  raceId: string
): RaceResult | undefined => {
  const results = getRaceById(raceId)?.results;
  if (!results) {
    return;
  }
  return results.find((result) => result.runnerId === runnerId);
};

export const getPredictedTime = (runnerId: string, raceId: string): number => {
  return getRunnerResultForRace(runnerId, raceId)?.predictedTime || 0;
};

export const getNextRace = (races: Race[] = allRaces): Race | undefined => {
  const upcomingRaces = races.filter(
    (race: Race) =>
      !race.isFinished &&
      getDateValue(race.startTime) > getDateValue(getToday())
  );
  const sortedRaces = upcomingRaces.sort((a: Race, b: Race): number =>
    sortByDate(a.startTime, b.startTime)
  );
  if (!sortedRaces) {
    return undefined;
  }
  return sortedRaces[0];
};
