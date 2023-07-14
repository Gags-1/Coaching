import React from "react";
import student from "../assets/student.png";

const Home = () => {
  return (
    <div>
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-evenly p-10 items-center">
        <div className="text-center sm:text-left">
          <div className="Font font-semibold text-[33px] md:text-4xl xl:text-[64px] w-[350px] md:w-[300px] xl:w-[500px]">
           <p className="xl:leading-[64px]">Unleash your potential, transform your life.</p>
          </div>
        </div>
        <div className="mt-5 sm:mt-0">
          <img src={student} alt="" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
