import React from "react";
import { IoIosTrendingUp } from "react-icons/io";

const Roi = ({
  icon: Icon,
  label,
  iconSecond: IconSecond,
  bgColor,
    iconBg,
  image
}) => {
  return (
    <section className="px-5 py-5 bg-green-300 rounded-3xl h-full space-y-5">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-lg font-medium text-gray-700">{label}</span>
          {/* Circular User Icon */}
          <span
            className={`flex items-center justify-center w-9 h-9 ${iconBg} rounded-full `}
          >
            <Icon size={20} />
          </span>
        </div>
      </div>
      <div className="middlePart flex justify-between items-center  p-4 rounded-xl ">
        <span className="text-green-600 bg-white rounded-2xl px-4 py-2">
          <IoIosTrendingUp size={28} />
        </span>

        <span className="flex flex-col items-start justify-center">
          <span className="font-bold text-xl">234%</span>
          <span className="text-gray-500 text-sm">ROI</span>
        </span>

        <span className="flex flex-col items-center">
          <span className="text-green-600 font-semibold text-lg">+24%</span>
          <span className="text-gray-500 text-sm">January</span>
        </span>
      </div>
      <div className="btmPart">
        <img src={image} alt="" srcset="" />
      </div>
    </section>
  );
};

export default Roi;
