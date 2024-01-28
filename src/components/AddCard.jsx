import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import BASE_URL from "../service"

const AddCard = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("creator", name);
  formData.append("title", title);
  formData.append("description", desc);

  const CreateCard = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/cards/new-card`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      navigate("/cookie");
    } catch (error) {
      console.error("Error creating card:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 h-screen bg-image-landscape bg-cover bg-center bg-no-repeat xsm:p-2">
      {loading ? (
        <Spinner />
      ) : (
        <div className="mt-36 xsm:mt-32">
          <div className="w-1/3 mx-auto xsm:w-full md:w-2/3 text-white border-slate-700 border-4">
            <h2 className="text-center p-5 mb-5 font-bold text-2xl w-full">
              Add Your Memory
            </h2>
            <form
              className="flex flex-col w-5/6 mx-auto"
              method="POST"
              onSubmit={CreateCard}
            >
              <label className="text-xl font-semibold">
                Title :
                <input
                  className="m-2 bg-gray-700 border-black border-2  w-3/4 xsm:m-1 xsm:text-lg"
                  type="text"
                  required
                  name="title"
                  maxLength={15}
                  placeholder=" Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="text-xl font-semibold">
                Description :
                <textarea
                  className="m-2 bg-gray-700 border-black border-2  w-3/4 h-24 xsm:w-full xsm:m-1 xsm:text-lg"
                  type="text"
                  required
                  rows={7}
                  name="description"
                  value={desc}
                  placeholder=" Share your experience"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </label>
              <label className="text-xl font-semibold">
                Creator :
                <input
                  className="m-2 bg-gray-700 border-black border-2  w-3/4 xsm:m-1 xsm:w-5/6 xsm:text-lg"
                  type="text"
                  required
                  name="name"
                  maxLength={20}
                  value={name}
                  placeholder=" your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <button
                className="text-xl font-semibold m-2 border-red-600 border-4 bg-red-400 hover:bg-red-700"
                type="submit"
              >
                Add Memory
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCard;
