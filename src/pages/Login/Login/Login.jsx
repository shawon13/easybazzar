import { useRef, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { PiEyeClosedThin } from "react-icons/pi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../../../SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  let [type, setType] = useState("password");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleType = () => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  const { loginUser, resetPassword } = useAuth();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-credential":
            toast.error(
              "Invalid credentials. Please check your email and password."
            );
            break;
        }
      });
  };
  // handle forget password
  const emailRef = useRef();
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("Please enter your email");
    }
    resetPassword(email)
      .then(() => {
        toast("Please Check your email.Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto sm:w-11/12 md:w-3/4 lg:w-7/12 xl:w-1/2 2xl:w-[45%] px-4">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-base lg:text-xl font-normal log-reg-title">
            Welcome to Easy Bazaar! Please Login
          </h2>
          <span className="text-sm text-gray-500 log-reg-text">
            New member?
            <Link to="/register" className="mx-1">
              Register
            </Link>
            here
          </span>
        </div>
        <div className="bg-white flex justify-center p-6 pb-10 rounded-md shadow-sm">
          <div className="w-4/5 log-reg-box">
            <ToastContainer />
            <form action="" onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block mb-1">Email*</label>
                <input
                  className="border w-full py-2.5 px-2.5 outline-0 email"
                  ref={emailRef}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Please enter your email"
                />
              </div>
              <div className="relative">
                <label className="block mb-1">Password*</label>
                <input
                  className="border w-full py-2.5 px-2.5 outline-0 password"
                  type={type}
                  name="password"
                  id=""
                  placeholder="Please enter your password"
                />
                {type == "text" ? (
                  <FaRegEye
                    onClick={handleType}
                    className="absolute text-xl right-3 sm:text-2xl top-10 cursor-pointer"
                  />
                ) : (
                  <PiEyeClosedThin
                    onClick={handleType}
                    className="absolute text-2xl right-3 sm:text-3xl top-9 cursor-pointer"
                  />
                )}
              </div>
              <div className="text-end">
                <span
                  onClick={handleResetPassword}
                  className="text-xs font-normal cursor-pointer text-sky-900"
                >
                  Reset Your Password
                </span>
              </div>
              <div className="mt-3.5">
                <button
                  className="text-white bg-black uppercase font-normal w-full py-3 cursor-pointer"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="position-relative mt-4">
              <p
                className="mx-auto text-center mb-0 fw-medium fs-6"
                style={{ width: "10%", border: "2px solid #f9f9f9" }}
              >
                OR
              </p>
              <p className="or-hr mb-0"></p>
              <p className="or-hr-two mb-0"></p>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
