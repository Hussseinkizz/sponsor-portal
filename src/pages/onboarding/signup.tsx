import {
  CountriesComboBoxResponsive,
  Country,
  getCountry,
} from "@/components/CountriesComboBox";
import { useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Props {}

const Signup = (props: Props) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phone, setPhone] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName || !email || !password || !selectedCountry || !phone) {
      alert("Please select and fill in all fields");
      return;
    }
    let phoneNumber = getCountry(selectedCountry?.name)?.dialing_code + phone;
    let data = {
      userName,
      email,
      password,
      phone: phoneNumber,
      country: selectedCountry?.name,
    };
    console.log("data::", data);
  };

  return (
    <main className="flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-gray-50">
      <div className="flex h-screen w-96 flex-col gap-2 bg-lime-200 p-8 shadow-md md:h-auto md:gap-4 md:rounded-md">
        <div className="mb-4 flex flex-col gap-4">
          <h1 className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <FaHandHoldingHeart className="size-8" />
            <span>Sponsor Portal</span>
          </h1>
          <p className="text-sm text-gray-700">
            signup and start sponsoring children
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Provide a username"
            />
          </div>
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
          <div className="flex flex-col gap-2">
            <CountriesComboBoxResponsive
              setSelectedCountry={setSelectedCountry}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Tell Phone Number
            </label>
            <div className="flex flex-row gap-2">
              <span className="flex rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500">
                {selectedCountry?.dialing_code}
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Enter tell phone"
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-red-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-red-900"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex justify-center gap-2 text-sm">
          <p className="text-red-800">Already have an account?</p>
          <Link
            to="/login"
            className="font-semibold text-red-800 underline underline-offset-1 hover:text-red-900"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
