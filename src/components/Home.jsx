import React from "react";

const Home = () => {
  return (
    <div className="p-10 h-screen bg-home-image-landscape bg-cover bg-no-repeat bg-center flex relative">
      <div className="text-white mt-36 h-fit -ml-4 xsm:absolute xsm:top-28 xsm:right-10">
        <h1 className="text-2xl font-bold md:text-xl">Welcome to Retrofiles</h1>
        <h1> Your Personal Memory Lane !</h1>
      </div>
      <div className="text-white mt-36 absolute w-1/3 bottom-24 right-4 md:bottom-10 md:w-2/5 md:right-2 xsm:left-6 xsm:bottom-20 xsm:w-2/3">
        <p className="text-lg font-semibold md:font-normal xsm:text-base xsm:font-bold">
          Join our community today and start preserving your memories.
          <br /> <br />
          Let's make every moment unforgettable !
        </p>
      </div>
    </div>
  );
};

export default Home;
