interface Series {
  id: string;
  name: string;
  startDate: number;
  endDate: number;
  description?: string;
}

const allSeries: Series[] = [
  {
    id: "1",
    name: "Winter 2020",
    startDate: 1604188800, // 2020-11-01
    endDate: 1614470400, // 2021-02-28
    description:
      "Welcome back after Coronavirus! We are excited to be back and out there again.",
  },
  {
    id: "2",
    name: "Spring 2021",
    startDate: 1614556800, // 2021-03-01
    endDate: 1622419200, // 2021-05-31
  },
];

export const getSeriesById = (id: string): Series | undefined =>
  allSeries.find((element) => element.id === id);

export default allSeries;
