import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginContext } from "./context/loginContext";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Layout } from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  const { assertLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    assertLoggedIn();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route key="/login" path="/" element={<Login />} />
          <Route key="/dashboard" path="/dashboard" element={<Dashboard />} />
          <Route key="/*" path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
