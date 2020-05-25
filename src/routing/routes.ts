interface Routes {
  HOME: string;
  LOGIN: string;
  SERIES_LIST: string;
  SERIES_DETAIL: string;
  RACE_DETAIL: string;
  RUNNER_DETAIL: string;
}

export const ROUTER_BASE = "/tortoise-hare/";

const routes: Routes = {
  HOME: "/",
  LOGIN: "/login",
  SERIES_LIST: "/series",
  SERIES_DETAIL: "/series/:seriesId",
  RACE_DETAIL: "/race/:raceId",
  RUNNER_DETAIL: "/runner/:runnerId",
};

export default routes;
