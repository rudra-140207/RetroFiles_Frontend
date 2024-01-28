import React from "react";
import { Hourglass } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="p-10 h-screen bg-image-landscape bg-center bg-cover bg-no-repeat">
      <div class="mt-80 w-fit mx-auto">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["white", "gray"]}
        />
      </div>
    </div>
  );
};

export default Spinner;
