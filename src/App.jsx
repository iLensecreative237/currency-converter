import { useEffect, useState } from "react";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import ConversionResult from "./components/ConversionResult";

const API_KEY = "72e28d7d61d9e121b920dca4"; // My API key
const API_URL = `https://v6.exchangerate-api.com/v6/72e28d7d61d9e121b920dca4/latest/USD`;

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/${fromCurrency}`)
      .then(res => res.json())
      .then(data => {
        setExchangeRates(data.conversion_rates);
        setCurrencies(Object.keys(data.conversion_rates));
      });
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRates[toCurrency]) {
      setResult((amount * exchangeRates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, exchangeRates]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">💱 Currency Converter</h1>

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg">
        <div className="flex flex-col gap-4">
          <AmountInput amount={amount} setAmount={setAmount} />

          <div className="flex gap-4">
            <CurrencySelector 
              currencies={currencies} 
              selectedCurrency={fromCurrency} 
              setSelectedCurrency={setFromCurrency} 
            />
            <span className="text-2xl">➡️</span>
            <CurrencySelector 
              currencies={currencies} 
              selectedCurrency={toCurrency} 
              setSelectedCurrency={setToCurrency} 
            />
          </div>

          <ConversionResult 
            amount={amount} 
            from={fromCurrency} 
            to={toCurrency} 
            result={result} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;