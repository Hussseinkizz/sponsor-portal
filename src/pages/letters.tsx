import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HiDownload,
  HiArrowLeft,
  HiChevronLeft,
  HiCalendar,
  HiEye,
} from "react-icons/hi";
import { IoFileTrayFull } from "react-icons/io5";
import { HiEnvelope } from "react-icons/hi2";

interface Letter {
  id: string;
  title: string;
  description: string;
  image: string; // Assuming image URL for letter preview
  date: string; // Date of the letter
}

const Letters = () => {
  const [childID, setChildID] = useState<string | null>(null);
  const [letters, setLetters] = useState<Letter[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const _childID = searchParams.get("id");
    if (_childID) {
      setChildID(_childID);
      fetchLetters(_childID);
    } else {
      navigate("/dashboard/children");
    }
  }, [location, navigate]);

  const fetchLetters = (childID: string) => {
    const fetchedLetters: Letter[] = [
      {
        id: "1",
        title: "Welcome Letter",
        description: "This letter welcomes you to our program.",
        image: "./src/assets/sample-letter.jpeg",
        date: "2024-01-15",
      },
      {
        id: "2",
        title: "Mid-Year Update",
        description: "An update on the progress made in the program.",
        image: "./src/assets/sample-letter.jpeg",
        date: "2024-06-10",
      },
    ];
    setLetters(fetchedLetters);
  };

  const filteredLetters = letters.filter((letter) =>
    letter.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4 text-center text-lg font-bold md:flex-row md:items-center">
            <Button
              className="flex items-center rounded-md bg-lime-200 p-2 text-sm text-lime-900 hover:bg-lime-300"
              onClick={() => navigate(`/dashboard/about?${childID}`)}
            >
              <HiChevronLeft className="size-6" />
              Back
            </Button>
            Letters From Byansi Eric
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search Letters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="my-4 border-lime-300"
          />
          {filteredLetters.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredLetters.map((letter) => (
                <div
                  key={letter.id}
                  className="rounded-md border border-gray-200 bg-lime-100 p-4 transition hover:bg-lime-50"
                >
                  <img
                    src={letter.image}
                    alt={letter.title}
                    className="mb-2 h-48 w-full rounded object-cover"
                  />
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-lime-800">
                    <HiEnvelope className="size-6 text-lime-600" />
                    {letter.title}
                  </h2>
                  <p className="text-gray-700">{letter.description}</p>
                  <p className="mb-4 mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <HiCalendar className="size-5" />
                    {letter.date}
                  </p>
                  <div className="mt-2 flex flex-col gap-2 md:flex-row">
                    <a
                      href={letter.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center gap-2 rounded-md bg-gradient-to-br from-rose-500 via-amber-600 to-red-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-rose-500"
                    >
                      <HiEye className="size-5" />
                      View
                    </a>
                    <a
                      href={letter.image}
                      download
                      className="flex w-fit items-center gap-2 rounded-md bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500"
                    >
                      <HiDownload className="size-5" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No letters found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Letters;
