import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MyContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { useTitle } from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  useTitle("Register");
  const { signUpUser, setLoading, googleSignIn } = useContext(MyContext);
  const handleSignUp = (data) => {
    // console.log(email, password);
    setSignUPError("");
    signUpUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        toast.success("Successfully created user");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setSignUPError(error.message.slice(22, 36));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
              <h1 className="text-5xl font-bold text-center">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
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
                    required: "Email is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
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
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirm-password"
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <p>
                Already have an account ?{" "}
                <Link to="/login">
                  {" "}
                  <span className="underline text-primary"> Login</span>
                </Link>
              </p>
              <div className="form-control mt-2">
                {signUpError && <p className="text-red-600">{signUpError}</p>}
                <button className="btn btn-outline">Register</button>
              </div>
            </form>
            <button
              onClick={handleGoogleSignIn}
              style={{ width: "20rem" }}
              className="btn btn-accent btn-outline google-login "
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
    </div>
  );
};

export default Register;
