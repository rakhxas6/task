import React from "react";
import visaCard from "../assets/visa.webp";
// import masterCard from "../assets/mastercard.png"
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import TransactionsElements from "./TransactionsElements";
import { SiNetflix } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";

const PaymentMethods = () => {
  return (
    <div className="flex flex-col  border border-gray-400 px-5 py-5 rounded-3xl space-y-5 mx-auto md:w-3/5 w-full">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-xl font-medium text-gray-700">
            Payment Methods
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
      <div className="middlePart flex flex-col md:flex-row  justify-between gap-4">
        <img
          src={visaCard}
          alt=" payment method visa card"
          srcset=""
          className="w-full object-contain"
        />
        <img
          src={visaCard}
          alt=" payment method visa card"
          srcset=""
          className="w-full  object-contain"
        />
      </div>
      <div className="btmPart space-y-2">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-xl font-medium text-gray-700">
            Transactions
          </span>
          {/* Circular User Icon &  buttons */}
          <div className="right flex items-center justify-center">
            <span
              className={`flex items-center justify-center   rounded-full gap-1 text-green-600`}
            >
              See all
              <IoIosArrowForward size={14} />
            </span>
          </div>
        </div>
        <div className="card space-y-2">
          <TransactionsElements
            icon={SiNetflix}
            label={"Netflix Subscription"}
            subLabel={"Today, 09:23am"}
            state={"Approved"}
            balance={"-$4.58"}
            stateBg={"bg-green-200"}
            bonus={"+5 Bonus"}
          />
          <TransactionsElements
            icon={FaUpwork}
            label={"Upwork"}
            subLabel={"August 15, 10:35pm"}
            state={"Pending"}
            stateBg={"bg-red-200"}
            balance={"+$15.58"}
            bonus={"+30 Bonus"}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
