import { CiDollar, CiFlag1 } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import demoImage from "../../assets/barChart.jpg";
import { IoPieChartOutline } from "react-icons/io5";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import SmallRoundedCard from "../SmallRoundedCard";
import Roi from "../Roi";

const TopCard = () => {
  return (
    <section className="flex flex-col md:flex-row  justify-between gap-5">
      <section className="flex sm:flex-row flex-col  border border-gray-400 px-5 py-5 rounded-3xl space-x-5 md:w-3/5 w-full ">
        <div className="leftSection ">
          <div className="topPart flex  justify-between items-start">
            <div className="left space-y-4">
              <p className="text-lg text-gray-600">Overall Balance</p>
              <span className="text-4xl font-semibold text-gray-900">
                $2,538,942
              </span>

              <div className="btm flex items-center gap-2">
                <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 rounded-full w-fit text-sm font-medium">
                  <FaAngleUp />
                  18.3%
                </span>
                <span className="text-gray-500 text-sm">last 12 months</span>
              </div>
            </div>

            <div className="right rounded-3xl hidden sm:flex   items-center justify-center bg-gray-200">
              <span className="px-6 py-3 bg-black text-white rounded-3xl cursor-pointer transition">
                Orders
              </span>
              <span className="px-6 py-3 rounded-3xl cursor-pointer transition">
                Income
              </span>
            </div>
          </div>

          <div className="btmPart mt-6">
            <img src={demoImage} alt="Chart" className="w-[500px]" />
          </div>
        </div>

        <div className="rightSection space-y-4 mt-0">
          <SmallRoundedCard
            label={"Total Sales"}
            icon={IoIosTrendingUp}
            balance={"$14,873"}
            iconBg={"bg-orange-200"}
          />
          <SmallRoundedCard
            label={"Total Profit"}
            icon={CiDollar}
            iconBg={"bg-pink-200"}
            balance={"$9,281"}
          />
          <SmallRoundedCard
            label={"Total Users"}
            icon={CiFlag1}
            iconBg={"bg-green-200"}
            balance={"45.1k"}
          />
          <SmallRoundedCard
            label={"Total Expenses"}
            iconBg={"bg-orange-200"}
            icon={IoPieChartOutline}
            balance={"$4,873"}
          />
        </div>
      </section>
      <section className="md:w-2/5 w-full">
        <Roi icon={IoEllipsisVerticalOutline} label={"Return On Investment"} image={demoImage} />
      </section>
    </section>
  );
};

export default TopCard;
