import React from "react";

const TransactionsElements = ({
  icon: Icon,
  label,
  subLabel,
  state,
  stateBg,
  bonus,
  balance,
}) => {
  return (
    <section>
      <div
        className={`flex border rounded-2xl px-5 py-4  items-center gap-2 justify-between`}
      >
        <div className={`icon px-3 py-3 bg-gray-300 rounded-3xl `}>
          <Icon size={20} />
        </div>
        <div className="textLeft">
          <p className="font-sans text-md sm:text-lg">{label}</p>
          <p className="font-semibold text-gray-600">{subLabel}</p>
        </div>
        <div className={`state px-3 py-1 ${stateBg} text-sm rounded-3xl`}>
          <p className="font-sans ">{state}</p>
        </div>
        <div className="textRight">
          <p className="font-sans text-md sm:text-xl ">{balance}</p>
          <p className={`text-xs`} >
            {bonus}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransactionsElements;
