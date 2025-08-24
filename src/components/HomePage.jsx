import { Link } from "react-router-dom";
// ✅ Import logo image 
import logoImage from "../assets/logo-image.png";
// ✅ Import profile image
import image from "../assets/profilepic.jpg"; 

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-48 bg-white shadow-md p-4 flex flex-col gap-6">
         {/* logo image */}
        <h2 className="text-xl font-bold text-green-700">
          <img
            src={logoImage} // ✅ Correct usage
            alt="User"
            className="h-10 sm:h-24 md:h-20 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </h2>
        <nav className="flex flex-col gap-3 text-gray-700 font-medium">
          <Link to="/" className="px-3 py-2 rounded-md bg-green-600 text-white">Home</Link>
          <Link to="/converter" className="px-3 py-2 rounded-md hover:bg-green-100">Converter</Link>
          <Link to="/send" className="px-3 py-2 rounded-md hover:bg-green-100">Send</Link>
          <Link to="/chart" className="px-3 py-2 rounded-md hover:bg-green-100">Chart</Link>
          <Link to="/setting" className="px-3 py-2 rounded-md hover:bg-green-100">Setting</Link>
        </nav>
      </aside>

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
          <h2 className="text-xl font-semibold mb-4">Currency</h2>
          <p className="text-green-700 font-semibold mb-2">1 EUR = 655.957000 XAF <span className="text-pink-600">Today</span></p>
          <div className="h-40 flex items-center justify-center">
            <p className="text-orange-500 font-medium">📈 Currency Trend Chart</p>
          </div>
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
          </div>
        </div>
      </main>
    </div>
  );
}