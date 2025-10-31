import React from "react";

const SmallRoundedCard = ({ icon: Icon, label, balance, iconBg, bgColor }) => {
  return (
    <div
      className={`flex border rounded-2xl px-5 py-4 ${
        bgColor ? "bg-white" : "bg-gray-100"
      }  items-center gap-2`}
    >
      <div className={`icon px-4 py-2 ${iconBg} rounded-3xl `}>
        <Icon size={20} />
      </div>
      <div className="text">
        <p className="font-sans ">{label}</p>
        <p className="font-semibold">{balance}</p>
      </div>
    </div>
  );
};

export default SmallRoundedCard;
