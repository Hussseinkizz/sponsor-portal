import { useState } from "react";
import { FaHandHoldingHeart, FaUsers, FaUserTie } from "react-icons/fa";
import { HiHome, HiMenuAlt2 } from "react-icons/hi";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    route: "/dashboard/about",
    icon: <HiHome className="size-8 text-lime-600" />,
  },
  {
    name: "All Children",
    route: "/dashboard/children",
    icon: <FaUsers className="size-8 text-lime-600" />,
  },
  {
    name: "Uploads",
    route: "/dashboard/upload",
    icon: <RiUploadCloud2Fill className="size-8 text-lime-600" />,
  },
  {
    name: "Account",
    route: "/dashboard/account",
    icon: <FaUserTie className="size-8 text-lime-600" />,
  },
];

const HomePage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <section className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-gray-900 p-4 text-white">
        <h1 className="flex items-center gap-2 font-bold text-gray-50 md:text-lg">
          <HiMenuAlt2
            className="size-6 text-red-500 md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          />
          <FaHandHoldingHeart className="hidden md:flex md:size-8" />
          <span>Sponsor Portal</span>
        </h1>
        <button
          className="rounded-md bg-red-600 px-2 py-1 text-sm text-white transition hover:bg-red-500 active:scale-95 md:px-4 md:py-2"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </header>

      {/* Main Content */}
      <section className="flex h-full w-full pt-16">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-lime-100 transition-transform ${
            navOpen ? "translate-x-0" : "-translate-x-full"
          } mt-14 flex-col border-r border-gray-200 shadow md:relative md:mt-0 md:flex md:w-[25%] md:translate-x-0`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center bg-lime-800 p-4">
            <img
              src="/src/assets/cropped-logo-1.png"
              alt="Omuto Logo"
              className="w-40"
            />
          </div>
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className="flex items-center gap-2 border-b border-lime-200 px-4 py-2 font-medium text-gray-800 transition hover:text-lime-500"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Main View */}
        <div
          onClick={() => setNavOpen(false)}
          className={`flex-grow overflow-y-auto p-4 md:m-2 md:border  md:border-gray-200 ${navOpen ? "bg-black/10 md:bg-lime-100" : "bg-lime-100"}`}
        >
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default HomePage;
