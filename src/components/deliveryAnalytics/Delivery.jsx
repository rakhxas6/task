import React from "react";
import { FaRocket } from "react-icons/fa";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

const Delivery = () => {
  const dataSet = [
    {
      color: "green",
      percentage: "22.3",
      label: "Open Rate",
    },
    {
      color: "purple",
      percentage: "14.2",
      label: "Click-through Rate",
    },
    {
      color: "pink",
      percentage: "11.6",
      label: "Conversion Rate",
    },
  ];
  return (
    <section className="flex flex-col  border border-gray-400 px-5 py-5 rounded-3xl space-y-5 md:w-3/5 w-full">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="sm:text-xl text-lg font-medium text-gray-700">
            Delivery Analytics
          </span>
          {/* Circular User Icon &  buttons */}
          <div className="right flex items-center gap-4">
            <div className="right rounded-3xl hidden sm:flex items-center justify-center bg-gray-200">
              <span className="px-5 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-3xl cursor-pointer transition">
                Email
              </span>
              <span className="px-5 py-2 sm:px-6 sm:py-3 rounded-3xl cursor-pointer transition">
                Last Week
              </span>
            </div>
            <span className={`flex items-center justify-center`}>
              <IoEllipsisVerticalOutline size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="btmPart flex flex-col sm:flex-row gap-4">
        <div className="left w-full">
          <div className="border-2 border-gray-400 text-center">
            image will live here
          </div>
        </div>
        <div className="right w-full space-y-5">
          <div className="top items-start px-5 py-3 bg-gray-200 rounded-xl w-full">
            <FaRocket size={28} color="green" />
            <span className="font-semibold text-xl">Welcome Emails!</span>
            <p className="font-sans text-md">Have great potentials!!</p>
          </div>
          <div className="bottom flex flex-col text-center justify-between ">
            {dataSet.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5">
                <span
                  className="w-5 h-3 rounded-full"
                  style={{ background: item.color }}
                ></span>
                <span className="font-semibold">{item.percentage}%</span>
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
