
function ConversionResult({ amount, from, to, result }) {
  return (
    <div className="text-center mt-6">
      {result && (
        <p className="text-xl font-semibold text-gray-800">
          {amount} {from} = <span className="text-green-600 font-bold">{result} {to}</span>
        </p>
      )}
    </div>
  );
}

export default ConversionResult;
