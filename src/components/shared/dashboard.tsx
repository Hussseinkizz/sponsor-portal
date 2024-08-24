import HomePage from "@/pages/home";
import { Link, useNavigate } from "react-router-dom";

interface Props {}

const navItems = [
  {
    name: "Home",
    route: "/home",
    icon: "/public/home.svg",
  },
  {
    name: "Uploads",
    route: "/upload",
    icon: "/public/upload-computer-solid.svg",
  },
  {
    name: "Account",
    route: "/account",
    icon: "/public/user.svg",
  },
];

const Dashboard = (props: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <main className="flex h-screen min-h-screen w-full items-start justify-start overflow-hidden bg-gray-50">
      <aside className="flex h-full w-[15%] flex-col border-r border-gray-200 bg-slate-100">
        <div className="flex w-full flex-col gap-2 bg-black px-4 py-2">
          <img src="/cropped-logo-1.png" alt="Omuto Logo" className="w-40" />
          <span className="flex text-sm text-lime-300">
            Empowering through Education
          </span>
        </div>
        <nav className="mt-4 flex h-4/5 w-full flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.route}
              className="flex items-center justify-start gap-2 border-b border-gray-200 px-4 py-2 font-medium text-gray-800 transition ease-in-out hover:text-lime-500"
            >
              <img src={item.icon} alt="icon" className="size-6" />
              <span className="flex">{item.name}</span>
            </Link>
          ))}
        </nav>
        <button
          className="flex w-full items-center justify-center gap-2 bg-lime-600 px-4 py-2 font-semibold text-white transition ease-in-out hover:bg-lime-500"
          onClick={handleLogout}
        >
          Log out
        </button>
      </aside>
      <section className="flex h-full w-[85%]" id="mainView">
        <HomePage />
      </section>
    </main>
  );
};

export default Dashboard;
