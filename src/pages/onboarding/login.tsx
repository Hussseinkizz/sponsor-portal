import { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@portal.com" && password === "1234") {
      console.log("Data::", { email, password });
      navigate("/dashboard?id=007");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <main className="flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-gray-50">
      <div className="flex h-screen w-96 flex-col gap-4 bg-lime-200 p-8 shadow-md md:h-auto md:rounded-md">
        <div className="mb-4 flex flex-col gap-4">
          <h1 className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <FaHandHoldingHeart className="size-8" />
            <span>Sponsor Portal</span>
          </h1>
          <p className="text-sm text-gray-700">
            welcome back to sponsor's portal
          </p>
        </div>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative z-[1] flex w-full">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Create a password"
              />
              {passwordVisible ? (
                <HiEye
                  className="absolute bottom-2 right-2 top-3 z-[2] cursor-pointer text-gray-500 hover:text-amber-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              ) : (
                <HiEyeOff
                  className="absolute bottom-2 right-2 top-3 z-[2] cursor-pointer text-gray-500 hover:text-amber-500"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="rounded-md bg-red-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-red-900"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 flex justify-start text-sm">
          <a href="#" className="text-gray-800 hover:text-gray-900">
            Forgot password?
          </a>
        </div>
        <div className="flex justify-start gap-2 text-sm">
          <p className="text-red-800">Don't have an account?</p>
          <Link
            to="/signup"
            className="font-semibold text-red-800 underline underline-offset-1 hover:text-red-900"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
