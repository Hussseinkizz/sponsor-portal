import {
  CountriesComboBoxResponsive,
  Country,
  getCountry,
} from "@/components/CountriesComboBox";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiCog, HiEye, HiEyeOff } from "react-icons/hi";

const Account = () => {
  const [userName, setUserName] = useState("JohnDoe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phone, setPhone] = useState("123456789");

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName || !email || !selectedCountry || !phone) {
      alert("Please fill in all fields");
      return;
    }
    if (newPassword && !oldPassword) {
      alert("Please enter your old password to change the password.");
      return;
    }
    const phoneNumber = getCountry(selectedCountry?.name)?.dialing_code + phone;
    const data = {
      userName,
      email,
      oldPassword,
      newPassword: newPassword ?? "******",
      phone: phoneNumber,
      country: selectedCountry?.name,
    };
    console.log("Updated data::", data);
  };

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-8">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
        <HiCog className="size-6" />
        Account Settings
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleUpdate}>
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
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="oldPassword"
            className="text-sm font-medium text-gray-700"
          >
            Old Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="oldPassword"
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your old password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="newPassword"
            className="text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="relative z-[1] flex w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Enter your new password"
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
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
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
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <Button
            type="submit"
            className="mb-4 flex w-full items-center gap-2 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Account;
