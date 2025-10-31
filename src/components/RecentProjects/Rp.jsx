import React from 'react'
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import Table from './Table';


const Rp = () => {
  return (
    <section className="flex flex-col  border border-gray-400 px-5 py-5 rounded-3xl  space-y-5">
      <div className="topPart">
        <div className="flex items-center gap-2 justify-between">
          {/* Text */}
          <span className="text-xl font-medium text-gray-700">
            Recent Projects
          </span>
          {/* Circular User Icon &  buttons */}
          <div className="right flex items-center gap-4">
            <div className="right rounded-3xl flex items-center justify-center bg-gray-200">
              <span className="px-6 py-3 bg-black text-white rounded-3xl cursor-pointer transition">
                SaaS
              </span>
              <span className="px-6 py-3 rounded-3xl cursor-pointer transition">
                Mobile
              </span>
              <span className="px-6 py-3 rounded-3xl cursor-pointer transition">
                Others
              </span>
            </div>
            <span
              className={`flex items-center justify-center w-9 h-9  rounded-full `}
            >
              <IoEllipsisVerticalOutline size={20} />
            </span>
          </div>
        </div>
      </div>

      <Table />
    </section>
  );
}

export default Rp