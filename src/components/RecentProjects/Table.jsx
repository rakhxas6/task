import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma, FaReact, FaAppStoreIos } from "react-icons/fa";

const projects = [
  {
    icon: <SiAdobephotoshop size={20} />,
    name: "PhotoShop",
    budget: "$29,340.41",
    leader: "Eri",
  },
  {
    icon: <IoDiamondSharp size={20} />,
    name: "Website SEO",
    budget: "$1,340.41",
    leader: "Timothy",
  },
  {
    icon: <FaAppStoreIos size={20} />,
    name: "iOS Mobile App Design",
    budget: "$5,340.41",
    leader: "Tyler",
  },
  {
    icon: <FaFigma size={20} />,
    name: "Figma Components",
    budget: "$240.41",
    leader: "Kristen",
  },
  {
    icon: <FaReact size={20} />,
    name: "Web App Design",
    budget: "$640.00",
    leader: "Isabelle",
  },
];

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-center text-sm font-light">
        <thead className="border-b font-medium  bg-neutral-100">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3 flex items-start">Name</th>
            <th className="px-6 py-3">Budget</th>
            <th className="px-6 py-3">Team</th>
            <th className="px-6 py-3">Leader</th>
            <th className="px-6 py-3">Activity Log</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((item, index) => (
            <tr key={index} className="border-b last:border-b-0  border-gray-300">
              <td className="px-6 py-3 font-medium">
                <input type="checkbox" />
              </td>

              <td className="px-6 py-3 ">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </td>

              <td className="px-6 py-3">{item.budget}</td>

              <td className="px-6 py-3">
                <div className="flex -space-x-3 justify-center">
                  <img
                    src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg"
                    className="w-6 h-6 rounded-full border"
                    alt="avatar"
                  />
                  <img
                    src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg"
                    className="w-6 h-6 rounded-full border"
                    alt="avatar"
                  />
                  <img
                    src="https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg"
                    className="w-6 h-6 rounded-full border"
                    alt="avatar"
                  />
                  {/* +3 Avatar */}
                  <div className="w-6 h-6 rounded-full border bg-gray-100 text-xs flex items-center justify-center font-semibold">
                    +3
                  </div>
                </div>
              </td>

              <td className="px-6 py-3">{item.leader}</td>

              <td className="px-6 py-3">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
