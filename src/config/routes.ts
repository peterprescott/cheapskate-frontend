import { Login } from ".././Pages/Login/Login";
import Dashboard from ".././Pages/Dashboard/Dashboard";
import PageNotFound from ".././Pages/PageNotFound/PageNotFound";
import Signup from "../Pages/Signup/Signup";

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
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
