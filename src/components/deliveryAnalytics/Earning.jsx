import React from "react";
import { CiBank } from "react-icons/ci";
import { FaAngleUp, FaRocket } from "react-icons/fa";
import { GiExpense, GiProfit } from "react-icons/gi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoEllipsisVerticalOutline } from "react-icons/io5";

const Earning = () => {
  const dataSet = [
    {
      icon: <CiBank size={24} />,
      color: "green",
      percentage: "22.3",
      label: "Bank Transfer",
      subLabel: "and +1 more",
    },
    {
      icon: <GiProfit size={24} />,
      color: "pink",
      percentage: "14.2",
      label: "Net Profit",
      subLabel: "and +4 more",
    },
    {
      icon: <IoIosTrendingUp size={24} />,
      color: "gray",
      percentage: "11.6",
      label: "Total Income",
      subLabel: "and +4 more",
    },
    {
      icon: <GiExpense size={24} />,
      color: "purple",
      percentage: "8.34",
      label: "Total Expenses",
      subLabel: "and +2 more",
    },
  ];
  return (
    <section className="flex flex-col  border border-gray-400 px-5 py-5 rounded-3xl space-y-5 md:w-2/5 w-full">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-xl font-medium text-gray-700">
            Earning Reports
          </span>
          {/* Circular User Icon &  buttons */}
          <div className="right flex items-center gap-4">
            <span
              className={`flex items-center justify-center w-9 h-9  rounded-full `}
            >
              <IoEllipsisVerticalOutline size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="btmPart flex flex-col space-y-5">
        {dataSet.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-1  border-b-2 border-gray-300 last:border-b-0"
          >
            <span
              className="px-5 py-2 rounded-full"
              style={{ background: item.color }}
            >
              {item.icon}
            </span>
            <div className="middlePart flex flex-col">
              <span className="text-gray-600">{item.label}</span>
              <span className="text-gray-600">{item.subLabel}</span>
            </div>
            <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full w-fit text-sm font-medium">
              <FaAngleUp />+{item.percentage}%
            </span>
          </div>
        ))}
      </div>

      <span className="text-xl text-center text-slate-700">
        View more markets
      </span>
    </section>
  );
};

export default Earning;
