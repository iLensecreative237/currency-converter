// SignupPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import logoImage from "../assets/logo-image.png";
import signupImage from "../assets/SignUp.jpg";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    agree: false,
  });

  const navigate = useNavigate(); // ✅ create navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);

    // ✅ after successful signup, redirect to home
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side: Logo + Image */}
      <div className="w-1/2 flex flex-col items-center justify-center p-6">
        {/* Logo */}
        <div className="flex items-center mb-50">
          <img src={logoImage} alt="Logo" className="h-10 sm:h-24 md:h-20 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out" />
        </div>
        {/* Illustration */}
        <img
          src={signupImage}
          alt="World currency Visual"
          className="rounded-lg shadow-lg w-full max-w-3xl"
        />
      </div>

      {/* Right side: Form */}
      <div className="w-1/2 bg-purple-50 flex items-center justify-center p-10">
        <form
          onSubmit={handleSubmit}
          className="bg-purple-50 rounded-xl shadow-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Create New Account
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Or Enter Phone number to{" "}
            <span className="text-green-600 font-medium cursor-pointer">
              Log in
            </span>
          </p>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          {/* Country */}
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-purple-300 rounded-lg"
          >
            <option value="">+1 Select Country</option>
            <option value="cm">+237 Cameroon</option>
            <option value="us">+1 USA</option>
            <option value="fr">+33 France</option>
          </select>

          {/* City */}
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-purple-300 rounded-lg"
          >
            <option value="">Select City</option>
            <option value="douala">Douala</option>
            <option value="yaounde">Yaoundé</option>
            <option value="buea">Buea</option>
          </select>

          {/* Terms & Conditions */}
          <label className="flex items-center text-sm mb-4 cursor-pointer">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to terms and conditions
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
