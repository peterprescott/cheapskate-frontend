import { Login } from ".././Pages/Login/Login";
import Dashboard from ".././Pages/Dashboard/Dashboard";
import PageNotFound from ".././Pages/PageNotFound/PageNotFound";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

export default routes;
