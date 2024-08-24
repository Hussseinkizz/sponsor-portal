import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddChild = () => {
  const [newChild, setNewChild] = useState({
    image: "",
    name: "",
    age: "",
    level: "",
    id: "",
    message: "",
    bio: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNewChild({ ...newChild, [name]: value });
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewChild({ ...newChild, image: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setNewChild({
      image: "",
      name: "",
      age: "",
      level: "",
      id: "",
      message: "",
      bio: "",
    });
  };

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-8">
      <h2 className="mb-4 flex w-full items-center justify-center text-xl font-semibold md:justify-center">
        Add New Child
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:flex-row">
        {/* Image Upload Section */}
        <div className="flex flex-col items-center gap-4 md:w-1/3">
          <label htmlFor="image-upload" className="relative">
            <div
              className="h-40 w-40 overflow-hidden rounded-full border border-gray-300 bg-gray-100"
              title="student's photo"
            >
              {newChild.image ? (
                <img
                  src={newChild.image}
                  alt="Child holding their school card"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  <MdAddPhotoAlternate size={40} />
                </div>
              )}
            </div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute left-0 top-0 h-full w-full opacity-0"
              required
            />
          </label>
        </div>

        {/* Form Fields Section */}
        <div className="flex flex-col gap-4 md:w-2/3">
          <Input
            type="text"
            name="name"
            value={newChild.name}
            onChange={handleInputChange}
            placeholder="Child's Name"
            required
          />
          <Input
            type="text"
            name="age"
            value={newChild.age}
            onChange={handleInputChange}
            placeholder="Age"
            required
          />
          <Input
            type="text"
            name="level"
            value={newChild.level}
            onChange={handleInputChange}
            placeholder="Level"
            required
          />
          <Input
            type="text"
            name="id"
            value={newChild.id}
            onChange={handleInputChange}
            placeholder="ID"
            required
          />
          <Textarea
            name="bio"
            value={newChild.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            required
          />
          <Textarea
            name="message"
            value={newChild.message}
            onChange={handleInputChange}
            placeholder="Message"
          />
          <div className="flex justify-between">
            <Button
              type="submit"
              className="mb-4 flex w-full items-center gap-2 bg-gradient-to-br from-lime-500 via-green-600 to-emerald-700 px-4 py-2 text-sm text-white transition hover:scale-95 hover:bg-lime-500 md:w-fit"
            >
              Save
            </Button>
            <Button
              variant="secondary"
              className="bg-rose-100 text-red-500 ring-1 ring-red-300"
              type="button"
              onClick={() => {
                setNewChild({
                  image: "",
                  name: "",
                  age: "",
                  level: "",
                  id: "",
                  message: "",
                  bio: "",
                });
                navigate("/dashboard/children");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddChild;
