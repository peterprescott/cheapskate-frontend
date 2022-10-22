import { Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Signup.css";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box className="signup-form-container">
      <h1>Sign Up to Cheapskate</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <Box className="names-input">
          <input
            style={{ width: "50%" }}
            id="firstName"
            type="text"
            placeholder="first name"
            {...register("firstName", { required: true })}
          />
          <input
            style={{ width: "50%" }}
            id="lastname"
            type="text"
            placeholder="last name"
            {...register("lastName", { required: true })}
          />
        </Box>
        <input
          id="email"
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        <input
          id="password"
          type="password"
          placeholder="set a password"
          {...register("password", { required: true })}
        />
        <div className="wrap">
          <input type="submit" className="action-btn" />
        </div>
      </form>
    </Box>
  );
}
