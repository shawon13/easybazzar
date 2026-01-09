import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FiShoppingBag, FiBox, FiUsers } from "react-icons/fi";
import { FaBarsProgress } from "react-icons/fa6";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sat", complete: 25, cancelled: 5 },
  { day: "Sun", complete: 30, cancelled: 3 },
  { day: "Mon", complete: 45, cancelled: 7 },
  { day: "Tue", complete: 40, cancelled: 4 },
  { day: "Wed", complete: 55, cancelled: 6 },
  { day: "Thu", complete: 60, cancelled: 2 },
  { day: "Fri", complete: 50, cancelled: 8 },
];
//pie chart
const pieData = [
  { name: "Complete Orders", value: 120 },
  { name: "Cancelled Orders", value: 35 },
  { name: "Processing Orders", value: 60 },
];
const COLORS = ["#4F46E5", "#ef4444", "#10B981"];

const AdminHome = () => {
  return (
    <section className="py-6">
      <div className="xl:container px-4 mx-auto">
        <h2 className="capitalize text-3xl font-semibold mb-7">Dashboard</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 dashbord-content-grid">
          <div className="bg-[#733AEA] rounded p-10">
            <div className="text-white">
              <span className="text-xl font-semiBold">Total Orders</span>
              <h5 className="text-4xl font-semiBold">335</h5>
            </div>
          </div>
          <div className="bg-[#058EFC] rounded p-10">
            <div className="text-white">
              <span className="text-xl font-semiBold">Total Revenue</span>
              <h5 className="flex items-center">
                <FaBangladeshiTakaSign className="text-2xl font-Bold" />
                <span className="text-4xl font-semiBold">335</span>
              </h5>
            </div>
          </div>
          <div className="bg-[#FD9722] rounded p-10">
            <div className="text-white">
              <span className="text-xl font-semiBold">Total Users</span>
              <h5 className="text-4xl font-semiBold">335</h5>
            </div>
          </div>
          <div className="bg-[#F2426E] rounded p-10">
            <div className="text-white">
              <span className="text-xl font-semiBold">Total Products</span>
              <h5 className="text-4xl font-semiBold">335</h5>
            </div>
          </div>
        </div>
        <div className="2xl:grid 2xl:grid-cols-2 gap-6 mt-6">
          {/* Sales Statistics */}
          <div className="bg-white rounded shadow p-5">
            <h3 className="text-lg mb-3">Sales Statistics</h3>
            <div className="w-full h-[300px] sm:h-[350px]">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  {/* Complete Orders Line */}
                  <Line
                    type="monotone"
                    dataKey="complete"
                    name="Complete Orders"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />

                  {/* Cancelled Orders Line */}
                  <Line
                    type="monotone"
                    dataKey="cancelled"
                    name="Cancelled Orders"
                    stroke="#ef4444"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 2xl:mt-0">
            {/* Orders Statistics */}
            <div className="bg-white rounded shadow p-5">
              <h3 className="text-lg">Orders Statistics</h3>
              <div className="h-[240px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={100}
                      startAngle={-45}
                      endAngle={225}
                      paddingAngle={5}
                      cornerRadius={5}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              {/* Custom Legend */}
              <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-2 items-center justify-between gap-4 2xl:gap-2 text-sm orders-statistics-grid">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded"
                      style={{ backgroundColor: COLORS[index] }}
                    ></span>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Store Statistics */}
            <div className="bg-white rounded shadow p-6">
              <h3 className="text-lg">Store Statistics</h3>
              <div className="h-[300px]">
                <div className="flex justify-between items-center my-3">
                  <div>
                    <span className="text-base text-gray-300 font-normal capitalize">
                      Orders
                    </span>
                    <h4 className="text-xl font-semiBold">122</h4>
                  </div>
                  <span className="w-10 h-10 bg-[#EFE8FF] rounded flex items-center justify-center">
                    <FiShoppingBag className="text-[#854FFF] text-xl" />
                  </span>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div>
                    <span className="text-base text-gray-300 font-normal capitalize">
                      Customers
                    </span>
                    <h4 className="text-xl font-semiBold">111</h4>
                  </div>
                  <span className="w-10 h-10 bg-[#DFF7FB] rounded flex items-center justify-center">
                    <FiUsers className="text-[#09C2DE] text-xl" />
                  </span>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div>
                    <span className="text-base text-gray-300 font-normal capitalize">
                      products
                    </span>
                    <h4 className="text-xl font-semiBold">88</h4>
                  </div>
                  <span className="w-10 h-10 bg-[#FFEBF3] rounded flex items-center justify-center">
                    <FiBox className="text-[#FF63B6] text-xl" />
                  </span>
                </div>
                <div className="flex justify-between items-center my-3">
                  <div>
                    <span className="text-base text-gray-300 font-normal capitalize">
                      categories
                    </span>
                    <h4 className="text-xl font-semiBold">122</h4>
                  </div>
                  <span className="w-10 h-10 bg-[#EFE8FF] rounded flex items-center justify-center">
                    <FaBarsProgress className="text-[#854FFF] text-xl" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
