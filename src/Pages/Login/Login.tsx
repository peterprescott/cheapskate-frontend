import { Box } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../constants";
import { LoginContext } from "../../context/loginContext";
import "./Login.css";

type Inputs = {
  username: string;
  password: string;
};

const api = axios.create({
  baseURL,
});

export default function App() {
  const navigate = useNavigate();
  const [loginFaliure, setLoginFaliure] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { logIn } = useContext(LoginContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { username, password } = data;
    api
      .post("/login", {
        username,
        password,
      })
      .then(() => {
        logIn(username, password);
        navigate("/dashboard");
        setLoginFaliure(false);
      })
      .catch(() => {
        setLoginFaliure(true);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className="login-page"
    >
      <h1>Welcome to cheapskate</h1>
      <Box sx={{ marginTop: "25em" }} gap={4}>
        {loginFaliure && (
          <Box sx={{ textAlign: "center", color: "#870101" }}>
            <h2>Login Attempt Failed</h2>
          </Box>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="wrap">
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
            className="input"
          />
          <div className="bar">
            <i></i>
          </div>
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            className="input"
          />
          {errors.password && <span>This field is required</span>}
          <div className="sign-in">
            <button type="submit" className="sign-in">
              Submit
            </button>
          </div>
        </form>
      </Box>
    </Box>
  );
}
