import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/apiClient";
import { LoginContext } from "../../context/loginContext";
import "./Login.css";

type Inputs = {
  username: string;
  password: string;
};

export function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const { isLoggedIn, user } = useContext(LoginContext);
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
      .then((res) => {
        localStorage.setItem("user", res.data);
        const { access_token } = res.data;
        setLoading(true);
        logIn(username, password, access_token);
        setLoading(false);
        navigate("/dashboard");
        setLoginFaliure(false);
      })
      .catch(() => {
        setLoginFaliure(true);
      });
  };

  return (
    <Box className="login-page">
      <h1>Welcome to cheapskate</h1>
      {isLoggedIn ? (
        <h1>{user?.username}</h1>
      ) : (
        <Box gap={4}>
          {loginFaliure && (
            <Box sx={{ textAlign: "center", color: "#870101" }}>
              <h2>Login Attempt Failed</h2>
            </Box>
          )}
          {loading && (
            <Box sx={{ textAlign: "center", color: "#b6ee65" }}>
              <h2>Loading...</h2>
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
              <button type="submit" className="action-btn submit">
                Submit
              </button>
            </div>
            <div>
              <h3>Not a member?</h3>
              <button
                type="submit"
                className="action-btn signup"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </div>
          </form>
        </Box>
      )}
    </Box>
  );
}
