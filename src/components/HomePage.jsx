import Sidebar from "./Sidebar"; // ✅ Import Sidebar
import { Link } from "react-router-dom";
// ✅ Import profile image
import image from "../assets/profilepic.jpg";
import ConverterImage from "../assets/ConverterImage1.jpeg";

export default function HomePage() {
  return (
     <div className="flex min-h-screen bg-gray-50">
      {/* ✅ Sidebar reused */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top bar */}
        <header>
          <section className="flex justify-between items-center mb-8 bg-white rounded-xl shadow-md p-6">
            <h1 className="text-xl font-bold text-gray-800">iLense Currency</h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center font-bold">
                 {/* here we just pass the image structure that has been imported abv  */}
                 <img src={image} alt="" className="rounded-full" /> 
              </div>
              <span className="text-gray-700 font-medium">Client Name</span>
              <button className="relative">
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                🔔
              </button>
            </div>
          </section>
        </header>

        {/* Currency Chart Section */}
        <section className="bg-purple-50 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Currency</h2>
          <p className="text-green-700 font-semibold mb-2">1 EUR = 655.957000 XAF <span className="text-purple-600">Today</span></p>
          <div className="h-10 flex items-center justify-center">
          </div>
        </section>

          {/* ✅ New Image Section */}
        <section className="my-8">
          <img
            src={ConverterImage}
            alt="Promo"
            className="w-full max-h-90 object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Transfer & Alerts */}
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="bg-purple-100 rounded-xl p-6 text-center shadow">
            <p className="font-semibold text-purple-800">Start Sending with iLense</p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Get Started</button>
          </div>
          <div className="bg-purple-100 rounded-xl p-6 text-center shadow">
            <p className="font-semibold text-purple-800">Set a rate alert</p>
            <p className="text-gray-600 text-sm">Stay up to date</p>
            ⏰
          </div>
        </div>
      </main>
    </div>
  );
}