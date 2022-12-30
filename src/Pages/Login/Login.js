import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { useTitle } from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  useTitle("Login");
  const [loginError, setLoginError] = useState("");
  const { signIn, googleSignIn } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };

  const handleFormSubmit = (data) => {
    // console.log(email, password);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully created user");
        console.log(user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <p>
              Don't have an account ?{" "}
              <Link to="/register">
                {" "}
                <span className="underline text-primary">Register</span>{" "}
              </Link>{" "}
            </p>

            <div className="form-control mt-2">
              <button className="btn btn-outline">Login</button>
            </div>
            <div className="form-control mt-2"></div>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-accent btn-outline google-login"
          >
            <span>
              {" "}
              <FcGoogle style={{ fontSize: "22px" }} />
            </span>
            <span style={{ marginLeft: "5px" }}> Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
