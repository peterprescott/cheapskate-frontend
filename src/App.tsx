import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/" element={<Login />} />
        <Route key="/dashboard" path="/dashboard" element={<Dashboard />} />
        <Route key="/*" path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
