interface Routes {
  HOME: string;
  LOGIN: string;
  SERIES_LIST: string;
  SERIES_DETAIL: string;
  RACE_DETAIL: string;
  USER_DETAIL: string;
}

const routes: Routes = {
  HOME: "/",
  LOGIN: "/login",
  SERIES_LIST: "/series",
  SERIES_DETAIL: "/series/:seriesId",
  RACE_DETAIL: "/race/:raceId",
  USER_DETAIL: "/user/:userId",
};

export default routes;
