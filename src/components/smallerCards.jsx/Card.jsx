import React from "react";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import demoImage from "../../assets/barChart.jpg";

const Card = ({ icon: Icon, label, iconSecond: IconSecond, bgColor, iconBg }) => {
  return (
    <section
      className={`relative ${bgColor} p-5 w-full rounded-xl shadow-sm border`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        {/* Left: User Icon + Label */}
        <div className="flex items-center gap-2">
          {/* Circular User Icon */}
          <span className={`flex items-center justify-center w-9 h-9 ${iconBg} rounded-full text-white`}>
            <Icon size={20} />
          </span>

          {/* Text */}
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </div>

        {/* Right: More Options */}
        <button className="text-gray-500 hover:text-gray-700 transition-colors">
          <IoEllipsisVerticalOutline size={20} />
        </button>
      </div>

      {/* demo image and data */}
      <div className="infoSectionAndImage flex justify-between">
        <div className="left space-y-4">
          <p className="text-4xl">4,562</p>
          <p className="text-lg">+23% last month</p>
        </div>
        <div className="right">
          <img
            src={demoImage}
            alt="chart for the respective cards"
            className="h-24 object-contain"
          />
        </div>
      </div>

      {IconSecond && (
        <div className="settingIcon absolute bottom-3 z-10 right-0 overflow-visible">
          <span className="flex items-center justify-center w-12 h-12 bg-green-400 rounded-full text-white">
            <IconSecond size={24} />
          </span>
        </div>
      )}
    </section>
  );
};

export default Card;
