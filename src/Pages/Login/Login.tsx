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
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {/* register your input into the hook by invoking the "register" function */}
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
            className="input"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            className="input"
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Box>
    </Box>
  );
}
