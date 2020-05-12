export interface Runner {
  id: string;
  name: string;
}

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
];

export const getRunnerById = (runnerId: string): Runner | undefined =>
  allRunners.find((element) => element.id === runnerId);
