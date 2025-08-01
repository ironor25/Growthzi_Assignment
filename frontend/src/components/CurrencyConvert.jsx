import React, { useState } from "react";
import axios from "axios";

const currencies = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"];

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converted, setConverted] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/convert-curr", {
        amount,
        from: fromCurrency,
        to: toCurrency,
      });

      setConverted(response.data.value);
    } catch (error) {
      console.error("Currency conversion failed:", error);
      setConverted("Error");
    }
  };

  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-sm mx-auto p-2 border rounded-md shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-center">Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter amount"
        className="w-full px-3 py-2 border rounded"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="flex gap-2">
        <select
          className="w-1/2 px-2 py-2 border rounded"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>

        <select
          className="w-1/2 px-2 py-2 border rounded"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <button
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        onClick={async () => {
          setLoading(true);
          await handleConvert();
          setLoading(false);
        }}
        disabled={loading}
      >
        {loading ? "Converting..." : "Convert"}
      </button>

      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {converted && !loading && (
        <p className="text-center text-green-600 font-medium">
          Converted value: {converted} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
