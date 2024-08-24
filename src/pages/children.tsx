import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const initialChildData = [
  {
    image: "./src/assets/IMG_5646-scaled.jpg",
    name: "Byansi Eric",
    age: "6",
    level: "Top Class",
    id: "007",
    message:
      "Make Your Contribution and Support Byansi Eric to stay in school. He is a good boy, loves learning, football and very friendly.",
    bio: "My name is Eric. I stay with my parents. I help at home by digging and fetching water and firewood. I am currently enrolled in nursery school at Omuto, and I want to be a doctor after studies.",
  },
  {
    image: "./src/assets/IMG_5641-scaled.jpg",
    name: "Ssenyonga Isma",
    age: "6",
    level: "Top Class",
    id: "003",
    message:
      "Make Your Contribution and Support Byansi Eric to stay in school. He is a good boy, loves learning, football and very friendly.",
    bio: "My name is Isma. I stay with my grandparents. I help at home by digging and fetching water. I am currently enrolled in nursery school at Omuto, and I want to be a doctor after studies.",
  },
];

const AllChildren = () => {
  const [childData, setChildData] = useState(initialChildData);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredChildren = childData.filter((child) =>
    child.name.toLowerCase().includes(searchTerm),
  );

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-8">
      {/* Search Bar and Add New Button */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <Input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="flex h-12 flex-grow"
        />
        <Button
          className="flex shrink-0 items-center gap-2 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
          onClick={() => navigate("/dashboard/add-child")}
        >
          Add New
        </Button>
      </div>

      {/* Children List */}
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
        {filteredChildren.map((child) => (
          <Link
            to={`/dashboard/about?id=${child.id}`}
            key={child.id}
            className="flex flex-col gap-2 overflow-hidden rounded-t-md bg-rose-800 hover:bg-rose-900"
          >
            <img
              src={child.image}
              alt={child.name}
              className="h-96 w-full rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale"
            />
            <div className="flex items-center justify-between p-2">
              <div className="flex w-full items-center justify-center gap-2 text-lg capitalize text-white">
                <h2>{child.name}</h2>
                <HiArrowRight className="size-4" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default AllChildren;
