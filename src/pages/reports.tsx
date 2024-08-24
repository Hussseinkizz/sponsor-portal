import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiEye, HiDownload, HiArrowLeft, HiChevronLeft } from "react-icons/hi";
import { IoFileTrayFull } from "react-icons/io5";

interface Report {
  id: string;
  title: string;
  description: string;
  file: string; // Assuming file URL for simplicity
}

const Reports = () => {
  const [childID, setChildID] = useState<string | null>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const _childID = searchParams.get("id");
    if (_childID) {
      setChildID(_childID);
      fetchReports(_childID);
    } else {
      navigate("/dashboard/children");
    }
  }, [location, navigate]);

  const fetchReports = (childID: string) => {
    const fetchedReports: Report[] = [
      {
        id: "1",
        title: "Term 1 Report Card",
        description: "This report covers the academic performance for Term 1.",
        file: "/src/assets/sample.pdf",
      },
      {
        id: "2",
        title: "Term 2 Report Card",
        description: "This report covers the academic performance for Term 2.",
        file: "/src/assets/sample.pdf",
      },
    ];
    setReports(fetchedReports);
  };

  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase()),
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
            Reports For Byansi Eric
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search Reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="my-4 border-lime-300"
          />
          {filteredReports.length > 0 ? (
            <ul className="space-y-4">
              {filteredReports.map((report) => (
                <li
                  key={report.id}
                  className="rounded-md border border-gray-200 bg-lime-100 p-4 transition hover:bg-lime-50"
                >
                  <h2 className="flex items-center gap-2 text-lg font-semibold text-lime-800">
                    <IoFileTrayFull className="size-6 text-lime-600" />
                    {report.title}
                  </h2>
                  <p className="text-gray-700">{report.description}</p>
                  <div className="mt-2 flex flex-col gap-2 md:flex-row">
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-40 items-center gap-2 rounded-md bg-gradient-to-br from-rose-500 via-amber-600 to-red-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-rose-500 md:w-fit"
                    >
                      <HiEye className="size-5" />
                      View Report
                    </a>
                    <a
                      href={report.file}
                      download
                      className="flex w-40 items-center gap-2 rounded-md bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
                    >
                      <HiDownload className="size-5" />
                      Download
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No reports found.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
