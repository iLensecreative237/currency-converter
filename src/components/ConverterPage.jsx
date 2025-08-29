// src/components/ConverterPage.jsx
import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import CurrencySelector from "./CurrencySelector";
import AmountInput from "./AmountInput";
import ConversionResult from "./ConversionResult";

// ✅ Import logo image 
import logoImage from "../assets/logo-image.png";
// ✅ Import profile image
import image from "../assets/profilepic.jpg"; 

const API_KEY = "72e28d7d61d9e121b920dca4";
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

function ConverterPage() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("XAF");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  // Fetch exchange rates
  useEffect(() => {
    fetch(`${API_URL}/${fromCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        setExchangeRates(data.conversion_rates);
        setCurrencies(Object.keys(data.conversion_rates));
      });
  }, [fromCurrency]);

  // Calculate conversion
  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      setResult((amount * exchangeRates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, exchangeRates]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-48 bg-green text-white shadow-md p-4 flex flex-col gap-6">
        {/* logo image */}
        <h2 className="text-xl font-bold text-green-700">
          <img
            src={logoImage}
            alt="User"
            className="h-10 sm:h-24 md:h-20 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </h2>
        <nav className="flex flex-col gap-3 text-gray-700 font-medium">
          <Link className="text-left px-3 py-2 rounded-md hover:bg-green-100">
            Home
          </Link>
          <Link className="text-left px-3 py-2 rounded-md bg-green-600 text-white">
            Converter
          </Link>
          <Link className="text-left px-3 py-2 rounded-md hover:bg-green-100">
            Send
          </Link>
          <Link className="text-left px-3 py-2 rounded-md hover:bg-green-100">
            Chart
          </Link>
          <Link className="text-left px-3 py-2 rounded-md hover:bg-green-100">
            Setting
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top bar */}
        <header>
          <section className="grid-cols-2 flex justify-between items-center mb-8 bg-purple-50 rounded-xl shadow-md p-10 max-w-10xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800">
              Currency Converter
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center font-bold">
                {/* here we just pass the image structure that has been imported abv  */}
                <img src={image} alt="" className="rounded-full" /> 
              </div>
              <span className="text-gray-700 font-medium">Client Name</span>
              <Link className="relative">
                <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                🔔
              </Link>
            </div>
          </section>
        </header>

        {/* Converter Box */}
        <section className="bg-purple-50 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
          <AmountInput amount={amount} setAmount={setAmount} />
        </section>

        {/* From / To Selector */}
        <section className="bg-purple-50 rounded-xl shadow-md mt-10 p-2 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mt-4">
            <div className="w-full">
              <label className="block text-sm text-purple-700">From</label>
              <CurrencySelector
                currencies={currencies}
                selectedCurrency={fromCurrency}
                setSelectedCurrency={setFromCurrency}
              />
            </div>
            <button
              onClick={() => {
                const temp = fromCurrency;
                setFromCurrency(toCurrency);
                setToCurrency(temp);
              }}
              className="p-2 bg-green-600 text-white rounded-full mt-5 hover:bg-green-700"
            >
              ⟳
            </button>
            <div className="w-full">
              <label className="block text-sm text-purple-700">To</label>
              <CurrencySelector
                currencies={currencies}
                selectedCurrency={toCurrency}
                setSelectedCurrency={setToCurrency}
              />
            </div>
          </div>
          <ConversionResult
            amount={amount}
            from={fromCurrency}
            to={toCurrency}
            result={result}
          />

          <p className="text-xs text-gray-500 mt-2">
            1 {fromCurrency} = {exchangeRates[toCurrency]} {toCurrency}
          </p>
        </section>

        {/* Extra actions */}
        <div className="grid grid-cols-2 gap-6 mt-20">
          <div className="bg-purple-100 rounded-xl p-6 text-center shadow">
            <p className="font-semibold text-purple-800">
              Start Sending with iLense
            </p>
            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Get Started
            </button>
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

export default ConverterPage;
