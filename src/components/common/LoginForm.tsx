import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DialogHeader } from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Login from "../../api/login";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>();

  const { setUser } = useContext(UserContext);

  const handleLogin: SubmitHandler<LoginFormValues> = async (data) => {
    const user = await Login(data.email, data.password);
    if (user) {
      setUser(user);
      reset();
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-3xl text-center w-fit mx-auto font-medium">
          Login
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleLogin)} className="mt-3">
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className="w-full p-2"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Enter your password"
            className="w-full p-2"
          />
          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <Button type="submit" className="mt-6">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
