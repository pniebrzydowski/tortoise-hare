export interface Runner {
  id: string;
  name: string;
}

export const allVolunteers: Runner[] = [
  {
    id: "4",
    name: "Patrick Niebrzydowski",
  },
  {
    id: "5",
    name: "Ann Niebrzydowski",
  },
  {
    id: "6",
    name: "Christina Wallner",
  },
];

export const allRunners: Runner[] = [
  {
    id: "1",
    name: "Leon Niebrzydowski",
  },
  {
    id: "2",
    name: "Michael Niebrzydowski",
  },
  {
    id: "3",
    name: "Vicki Niebrzydowski",
  },
  ...allVolunteers,
];

export const getRunnerName = (runnerId: string) =>
  getRunnerById(runnerId)?.name;

export const getRunnerById = (runnerId: string): Runner | undefined =>
  allRunners.find((element) => element.id === runnerId);
