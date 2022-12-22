import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../Contexts/AuthProvider/AuthProvider";
import { useTitle } from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  useTitle("Register");
  const { signUpUser } = useContext(MyContext);
  const handleSignUp = (data) => {
    // console.log(email, password);
    setSignUPError("");
    signUpUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
        toast.success("Successfully created user");
      })
      .catch((error) => {
        console.error(error);
        setSignUPError(error.message);
      });
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
                  type="text"
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
