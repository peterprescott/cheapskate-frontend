import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import "./Layout.css";

export const Layout = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <>
      <nav className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>{isLoggedIn && <li>You are logged in!</li>}</li>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
