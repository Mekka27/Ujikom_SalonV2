import { FaUsers, FaSmile, FaLayerGroup, FaClock } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Dashboard() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Booking Data',
        data: [10, 20, 35, 55, 40, 30, 35, 40, 90, 60, 40, 50],
        fill: false,
        borderColor: '#6366F1',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar (fixed width) */}
      {/* This will be handled by NavbarAdmin and it will be fixed */}

      {/* Content area */}
      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen max-w-full">
        <h1 className="text-3xl font-bold mb-6">Good Morning, Admin</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl mr-4" />
              <div>
                <p className="text-lg">Users</p>
                <p className="text-2xl font-bold">40</p>
              </div>
            </div>
            <a href="#" className="underline text-sm">View Details</a>
          </div>
          <div className="bg-green-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaSmile className="text-3xl mr-4" />
              <div>
                <p className="text-lg">Services</p>
                <p className="text-2xl font-bold">55</p>
              </div>
            </div>
            <a href="#" className="underline text-sm">View Details</a>
          </div>
          <div className="bg-red-700 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaLayerGroup className="text-3xl mr-4" />
              <div>
                <p className="text-lg">Service Categories</p>
                <p className="text-2xl font-bold">7</p>
              </div>
            </div>
            <a href="#" className="underline text-sm">View Details</a>
          </div>
          <div className="bg-purple-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center mb-4">
              <FaClock className="text-3xl mr-4" />
              <div>
                <p className="text-lg">Booking Schedule</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
            <a href="#" className="underline text-sm">View Details</a>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Data Booking</h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}
