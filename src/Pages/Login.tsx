import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Login.css";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormData({
      data,
    });
    await axios.post("cheapskate.pythonanywhere.com/login", {
      data,
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
            {...(register("example"), { required: true })}
            className="input"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="password"
            placeholder="password"
            {...register("exampleRequired", { required: true })}
            className="input"
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </Box>
    </Box>
  );
}
