import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

type Inputs = {
  username: string;
  password: string;
};

const api = axios.create({
  baseURL: "https://cheapskate.pythonanywhere.com",
});

export default function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loginFaliure, setLoginFaliure] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormData({
      data,
    });
    const { username, password } = data;
    api
      .post("/login", {
        username,
        password,
      })
      .then(() => {
        navigate("/home");
      })
      .then(() => {
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
