import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea component
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiOutlineUpload, HiPlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";

interface Student {
  id: string;
  name: string;
}

interface Upload {
  title: string;
  fileType: string;
  description: string;
  file: File | null;
  preview: string | null;
}

const Upload = () => {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [uploads, setUploads] = useState<Upload[]>([
    { title: "", fileType: "", description: "", file: null, preview: null },
  ]);

  const students: Student[] = [
    { id: "1", name: "Byansi Eric" },
    { id: "2", name: "Jane Doe" },
  ];

  const handleStudentChange = (id: string) => {
    setSelectedStudent(id);
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0] || null;
    const newUploads = [...uploads];
    newUploads[index] = {
      ...newUploads[index],
      file,
      preview: file ? URL.createObjectURL(file) : null,
    };
    setUploads(newUploads);
  };

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newUploads = [...uploads];
    newUploads[index].title = e.target.value;
    setUploads(newUploads);
  };

  const handleFileTypeChange = (value: string, index: number) => {
    const newUploads = [...uploads];
    newUploads[index].fileType = value;
    setUploads(newUploads);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ) => {
    const newUploads = [...uploads];
    newUploads[index].description = e.target.value;
    setUploads(newUploads);
  };

  const addUploadField = () => {
    setUploads([
      ...uploads,
      { title: "", fileType: "", description: "", file: null, preview: null },
    ]);
  };

  const removeUploadField = (index: number) => {
    setUploads(uploads.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!selectedStudent) {
      alert("Please select a student");
      return;
    }

    // Here, you'd normally handle the upload
    console.log("Uploading files for student:", selectedStudent);
    console.log("Uploads:", uploads);
  };

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white">
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Upload Files for Student</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label>Select Student</Label>
            <Select onValueChange={handleStudentChange}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a student..." />
              </SelectTrigger>
              <SelectContent>
                {students.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {uploads.map((upload, index) => (
            <div key={index} className="mb-4 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <Label>Title</Label>
                  <Input
                    value={upload.title}
                    onChange={(e) => handleTitleChange(e, index)}
                    placeholder="Enter upload title"
                    className="mb-2 w-full" // Make input wider
                  />
                </div>
                <Button
                  variant="destructive"
                  className="mt-6"
                  onClick={() => removeUploadField(index)}
                >
                  <FaTrash className="size-4 md:size-6" />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Upload Type</Label> {/* Changed label text */}
                <Select
                  onValueChange={(value) => handleFileTypeChange(value, index)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select upload type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photo">Photo</SelectItem>
                    <SelectItem value="letter">Letter</SelectItem>
                    <SelectItem value="report">Report</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Description</Label>
                <Textarea
                  value={upload.description}
                  onChange={(e) => handleDescriptionChange(e, index)}
                  placeholder="Enter upload description"
                  className="mb-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Upload File</Label>
                <div className="rounded-lg border-2 border-dashed border-gray-300 p-4 text-center">
                  <input
                    type="file"
                    accept="image/*,application/pdf"
                    onChange={(e) => handleFileChange(e, index)}
                    className="hidden"
                    id={`file-input-${index}`}
                  />
                  <label
                    htmlFor={`file-input-${index}`}
                    className="cursor-pointer"
                  >
                    {upload.preview ? (
                      <img
                        src={upload.preview}
                        alt="preview"
                        className="mx-auto max-h-40 rounded-md"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <HiOutlineUpload className="text-3xl text-gray-500" />
                        <span>Click to upload</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          ))}

          <Button
            className="mb-4 flex w-full items-center gap-2 text-lime-600 ring-1 ring-lime-300 hover:text-lime-500 md:w-fit"
            variant="outline"
            onClick={addUploadField}
          >
            <HiPlus className="size-4" />
            Add More
          </Button>

          <Button
            className="mb-4 flex w-full items-center gap-2 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
            onClick={handleSubmit}
          >
            Submit Uploads
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upload;
