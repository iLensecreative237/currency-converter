function AmountInput({ amount, setAmount }) {
  return (
    <div>
      <label className="block text-sm text-purple-700 mb-1">Enter Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  );
}

export default AmountInput;