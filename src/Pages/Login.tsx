import { Box } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "30vw" }}>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="username"
          {...(register("example"), { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Box>
  );
}
