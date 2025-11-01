 import React from "react";
import { IoEllipsisVerticalOutline, IoPieChartOutline } from "react-icons/io5";
import SmallRoundedCard from "./SmallRoundedCard";
import { IoIosTrendingUp } from "react-icons/io";
import { PiCursorClickLight } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const MarketingReport = () => {
  return (
    <div className="flex flex-col  border border-gray-400 px-5 py-5 rounded-3xl space-y-5 md:w-2/5 w-full">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-xl font-medium text-gray-700">
            Marketing Reports
          </span>
          {/* Circular User Icon &  buttons */}
          <div className="right flex items-center gap-4">
            <span
              className={`flex items-center justify-center w-9 h-9  rounded-full`}
            >
              <IoEllipsisVerticalOutline size={20} />
            </span>
          </div>
        </div>
      </div>
      <div className="middlePart  flex flex-col sm:flex-row gap-4">
        <div className="left space-y-5 w-full">
          <SmallRoundedCard
            label={"Search Volume"}
            icon={IoIosTrendingUp}
            balance={"+2.9k"}
            iconBg={"bg-slate-200"}
            bgColor={"bg-white"}
          />
          <SmallRoundedCard
            label={"Return Ratio"}
            icon={IoPieChartOutline}
            balance={"1.22"}
            iconBg={"bg-slate-200"}
            bgColor={"bg-white"}
          />
          <SmallRoundedCard
            label={"Clicks / Search"}
            icon={PiCursorClickLight}
            balance={"0.83"}
            iconBg={"bg-slate-200"}
            bgColor={"bg-white"}
          />
          <SmallRoundedCard
            label={"Return Ratio"}
            icon={IoPieChartOutline}
            balance={"41.2"}
            iconBg={"bg-slate-200"}
            bgColor={"bg-white"}
          />
        </div>
        <div className="right w-full space-y-5">
          <div className="topPart w-full h-60 border border-slate-200 flex items-center justify-center">image goes here</div>
          <div className="btmPart flex flex-col items-center justify-between">
            <span className="font-bold text-2xl">275</span>
            <span className="text-center text-gray-500">
              Learn Insights on how to manage <br />
              all aspects of your startup.
            </span>
          </div>
        </div>
      </div>
      <div className="bottomPart flex justify-between items-center gap-2 bg-slate-200 px-5 py-5 rounded-3xl w-full">
        <span>
          <FaTelegramPlane size={28} />
        </span>
        <span>
          Learn Insights on how to manage <br />
          all aspects of your startup.
        </span>
        <span className="px-3 py-3 bg-blue-600 rounded-full items-center flex justify-between">
          <CiPlay1 size={24} color="white" />
        </span>
      </div>
    </div>
  );
};

export default MarketingReport;
