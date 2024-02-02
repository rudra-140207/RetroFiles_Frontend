import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import BASE_URL from "../service"


const AllCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      new Date(dateString)
    );
    return formattedDate;
  };

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/cards/all-card`)
      .then((res) => {
        setCards(res.data.reverse());
        // console.log(res.data);
      })
      .catch((error) => console.log(error));

    setLoading(false);
  };

  const handleLike = async (cardId, count) => {
    try {
      await axios
        .post(
          `${BASE_URL}/cards/like`,
          {
            _id: cardId,
            count,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => console.log(res));

      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (cardId) => {
    try {
      const res = await handleOperations("delete");
      console.log(res);
      if (res && !(res.data.message === "missing field")) {
        if (
          res.data.delete === "Allow Delete" ||
          res.data.message === "Created"
        ) {
          try {
            console.log(cardId);
            await axios
              .delete(`${BASE_URL}/cards/delete`, {
                data: {
                  _id: cardId,
                },
                headers: {
                  "Content-Type": "application/json",
                },
              })
              .then((res) => console.log(res));

            fetchData();
          } catch (error) {
            console.log(error);
          }
        } else if (res.data.delete === "NO" || res.data.message === "NO") {
          console.log("NA");
          alert("Deleting more than one card is not allowed in one session.");
        }
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (cardId) => {
    try {
      const res = await handleOperations("edit");
      console.log(res);
      if (res && !(res.data.message === "missing field")) {
        if (res.data.edit === "Allow Edit" || res.data.message === "Created") {
          console.log("reached");
          navigate(`/edit-card/${cardId}`);
        } else if (res.data.edit === "NO" || res.data.message === "NO") {
          console.log("NA");
          alert("Editing more than one card is not allowed in one session.");
        }
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOperations = async (field) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/cards/operation`,
        {
          field,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials : true ,
        }
      );
      console.log(res);
      if (res) {
        return res;
      }
      console.log("Not fetched");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 h-full bg-black bg-image-landscape bg-cover bg-no-repeat bg-center xsm:p-2">
      <h1 className="mt-28 font-extrabold text-white text-center text-2xl">
        Memories
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div class="flex px-8 m-auto justify-center w-3/4 flex-wrap xsm:w-full xsm:p-2 md:w-11/12 md:p-2">
          {cards.map((block, index) => (
            <div class="flex m-10 w-1/4 h-96 xsm:w-3/4 xsm:m-4 xsm:h-80 md:w-2/5 md:m-4">
              <div
                key={block._id}
                class="w-full relative shadow-xl shadow-cyan-800/45 hover:shadow-cyan-300/80 bg-card-landscape text-white bg-cover bg-no-repeat bg-center"
              >
                <h2 class="w-full bg-transparent h-8 text-center text-2xl font-extrabold">
                  {block.title}
                </h2>
                <h3 class="size-lg bg-transparent w-full h-6 text-center font-bold">
                  Created By : {block.creator}
                </h3>

                <h4 class="text-md bg-transparent mt-5 w-full h-6 font-semibold p-1">
                  {formatDate(block.createdOn)}
                </h4>
                <div class="bg-transparent w-full font-semibold h-1/2 overflow-auto p-2 mt-5 break-words xsm:mt-1">
                  {block.description}
                </div>
                <div className="bg-transparent flex absolute bottom-2 w-full">
                  <div className="ml-5 flex w-max">
                    <button
                      onClick={() => handleLike(block._id, block.likeCount)}
                    >
                      <AiFillLike
                        style={{ color: "blue", fontSize: "1.5rem" }}
                      />
                    </button>
                    <span className="text-white">{block.likeCount}</span>
                  </div>

                  <div className=" w-max ml-auto">
                    <button onClick={() => handleEdit(block._id)}>
                      <GrEdit style={{ fontSize: "1.5rem", color: "white" }} />
                    </button>
                  </div>
                  <div className="w-max ml-auto mr-2">
                    <button onClick={() => handleDelete(block._id)}>
                      <RiDeleteBin6Line
                        style={{ color: "red", fontSize: "1.5rem" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCards;
