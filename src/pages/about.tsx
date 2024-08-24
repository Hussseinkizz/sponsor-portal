import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiFilm, HiFolder } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ChildInfo {
  id: string;
  name: string;
  age: string;
  level: string;
  message?: string;
  image: string;
  bio: string;
}

const childInfo = {
  image: "./src/assets/IMG_5646-scaled.jpg",
  name: "Byansi Eric",
  age: "6",
  level: "Top Class",
  id: "007",
  message:
    "Make Your Contribution and Support Byansi Eric to stay in school. He is a good boy, loves learning, football and very friendly.",
  bio: "My name is Eric. I stay with my parents. I help at home by digging and fetching water and firewood. I am currently enrolled in nursery school at Omuto, and I want to be a doctor after studies.",
};

const About = () => {
  const [childID, setChildID] = useState("");

  const handleDonate = () => {
    console.log("sponsored!");
    window.open(
      "https://fundraise.givesmart.com/f/1cmd/n?vid=16mh0e",
      "_blank",
    );
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let _childID = searchParams.get("id");
    if (_childID) {
      localStorage.setItem("childID", _childID);
      // console.log("child id from url", _childID);
      setChildID(_childID);
    } else {
      _childID = localStorage.getItem("childID");
      if (_childID) {
        setChildID(_childID);
        // console.log("child id from storage", childID);
      } else {
        navigate("/dashboard/children");
      }
    }
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-2">
      <section className="flex w-full flex-col gap-4 md:flex-row">
        <div className="flex h-fit w-full gap-2 rounded-md  bg-lime-50 p-4 md:w-[35%]">
          <img
            src={childInfo.image}
            alt={childInfo.name}
            className="h-96 w-full rounded-md transition ease-in-out hover:scale-105 hover:grayscale"
          />
        </div>
        <div className="flex flex-grow flex-col gap-2 p-4 md:w-[75%]">
          <h1 className="flex gap-2 text-xl font-semibold text-gray-800">
            <span className="flex">ID Number:</span>
            <span className="flex">{childInfo.id}</span>
          </h1>
          <h1 className="flex gap-2">
            <span className="flex text-xl font-semibold text-gray-800">
              Name:
            </span>
            <span className="flex">{childInfo.name}</span>
          </h1>
          <h1 className="flex gap-2">
            <span className="flex text-xl font-semibold text-gray-800">
              Level:
            </span>
            <span className="flex">{childInfo.level}</span>
          </h1>
          <h1 className="flex gap-2">
            <span className="flex text-xl font-semibold text-gray-800">
              Age:
            </span>
            <span className="flex">{childInfo.age}</span>
          </h1>
          <div className="flex flex-col justify-start gap-2">
            <h1 className="flex text-xl font-semibold text-gray-800">Bio:</h1>
            <p className="flex">{childInfo.bio}</p>
          </div>
          {/* Action Buttons */}
          <div className="mt-4 flex w-full flex-col items-start justify-start gap-2 md:mt-6">
            <button
              className="mb-4 flex w-full items-center gap-2 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
              onClick={handleDonate}
            >
              <FaHeart className="size-4 animate-pulse" />
              Sponsor {childInfo.name}
            </button>
            <div className="_hover-styles mb-2 flex items-center gap-2 border-b border-lime-300 pb-1 text-lime-600 hover:text-lime-500">
              <HiFolder className="size-8 md:size-6" />
              <Link to={`/dashboard/reports?id=${childID}`} className="flex">
                See Report Card And Academic Termly Report
              </Link>
            </div>
            <div className="_hover-styles mb-2 flex items-center gap-2 border-b border-lime-300 pb-1 text-lime-600 hover:text-lime-500">
              <HiEnvelope className="size-6" />
              <Link to={`/dashboard/letters?id=${childID}`} className="flex">
                See Letters From {childInfo.name}
              </Link>
            </div>
            <div className="_hover-styles mb-2 flex items-center gap-2 border-b border-lime-300 pb-1 text-lime-600 hover:text-lime-500">
              <HiFilm className="size-6" />
              <Link to={`/dashboard/photos?id=${childID}`} className="flex">
                See {childInfo.name}'s Yearly Photos
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <p className="mt-4 flex border-t-2 border-lime-300 py-2 text-gray-800">
        {childInfo.message}
      </p> */}
    </div>
  );
};

export default About;
