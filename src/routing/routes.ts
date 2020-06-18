interface Routes {
  HOME: string;
  LOGIN: string;
  REGISTER: string;
  FORGOT_PASSWORD: string;
  SERIES_LIST: string;
  SERIES_DETAIL: string;
  RACE_DETAIL: string;
  RUNNER_DETAIL: string;
}

const routes: Routes = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/login/register",
  FORGOT_PASSWORD: "/login/forgot-password",
  SERIES_LIST: "/series",
  SERIES_DETAIL: "/series/:seriesId",
  RACE_DETAIL: "/race/:raceId",
  RUNNER_DETAIL: "/runner/:runnerId",
};

export default routes;
