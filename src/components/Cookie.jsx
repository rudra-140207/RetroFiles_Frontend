import React, { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../service"
import Spinner from "./Spinner";

const Cookie = () => {
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
  const handleAllow = async () => {
    try {
      await axios.get(`${BASE_URL}/cards/set-cookie`,{
        withCredentials : true ,
      }).then((res) =>{
        console.log(res);
        navigate("/cards");
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    const checkCookie = async () => {
      try {
        const res = await axios.post(`${BASE_URL}/cards/verify-cookie`,{},{
          withCredentials : true ,
        });
        if (res.data.message === "Exist") {
          console.log(res);
          
          navigate("/cards");
        }
        
      } catch (error) {
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    };
    checkCookie();
  });

  return (
    <div className="p-10 h-screen bg-image-landscape bg-cover bg-no-repeat bg-center xsm:p-2">
      {loading ? (
        <Spinner />
      ) : (
      <div className="mt-36 border-white border-4 text-white w-1/4 m-auto h-1/3 xsm:w-3/4 xsm:h-1/3 md:w-1/2">
        <h1 className="h-1/4 w-full text-center text-2xl font-extrabold xsm:h-1/5">
          Cookie Setting
        </h1>
        <p className="p-2 h-1/2 font-bold text-lg xsm:text-sm">
          To resist users from performing multiple random operations on the
          platform , we require you to allow us saving cookie to your browser .
        </p>
        <div className=" text-center space-x-10 mt-4">
          <button
            className="border-green-600 border-4 bg-green-500 hover:bg-green-700 p-1 font-bold"
            onClick={handleAllow}
          >
            Allow
          </button>
          <span className="border-red-600 border-4 bg-red-500 hover:bg-red-700 p-1 font-bold">
            <Link to={"/"}>Deny</Link>
          </span>
        </div>
      </div> 
      )}
    </div>
  );
};

export default Cookie;
