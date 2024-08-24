import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HiChevronLeft, HiCalendar } from "react-icons/hi";
import { Button } from "@/components/ui/button";

interface Photo {
  id: string;
  title: string; // Title of the photo
  description: string; // Description of the photo
  image: string; // Assuming image URL for photo
  date: string; // Date of the photo
}

const Photos = () => {
  const [childID, setChildID] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const _childID = searchParams.get("id");
    if (_childID) {
      setChildID(_childID);
      fetchPhotos(_childID);
    } else {
      navigate("/dashboard/children");
    }
  }, [location, navigate]);

  const fetchPhotos = (childID: string) => {
    const fetchedPhotos: Photo[] = [
      {
        id: "1",
        title: "Photo of Byansi at the Park",
        description: "Byansi enjoying a sunny day at the park.",
        image: "./src/assets/IMG_5646-scaled.jpg",
        date: "2024-01-15",
      },
      {
        id: "2",
        title: "Celebration Day",
        description: "A memorable celebration with friends.",
        image: "./src/assets/IMG_5646-scaled.jpg",
        date: "2024-06-10",
      },
    ];
    setPhotos(fetchedPhotos);
  };

  const filteredPhotos = photos.filter((photo) =>
    photo.date.toLowerCase().includes(searchTerm.toLowerCase()),
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
            Photos of Byansi Eric
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search Photos by Date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="my-4 border-lime-300"
          />
          {filteredPhotos.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="flex w-auto flex-col rounded-md border border-gray-200 bg-lime-100 transition hover:bg-lime-50"
                >
                  <img
                    src={photo.image}
                    alt={`Photo taken on ${photo.date}`}
                    className="h-96 w-full rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale"
                  />
                  <div className="flex flex-col gap-2 p-2">
                    <h2 className="mt-2 text-lg font-semibold text-lime-800">
                      {photo.title}
                    </h2>
                    <p className="text-gray-700">{photo.description}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <HiCalendar className="size-5" />
                      {photo.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No photos found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Photos;
