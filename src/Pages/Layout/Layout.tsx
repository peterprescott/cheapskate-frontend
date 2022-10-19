import { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/loginContext";
import "./Layout.css";

export const Layout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logOut } = useContext(LoginContext);
  return (
    <>
      <nav className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          {isLoggedIn && (
            <button
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
              Logout
            </button>
          )}
        </li>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
