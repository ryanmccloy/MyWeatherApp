import Card from "./Card";

function FutureForecastCards() {
  return (
    <div className="bg-white/10 border p-2 rounded-lg flex-1 shadow-md ">
      <h2 className="font-semibold">10-DAY FORECAST</h2>
      <div className="flex gap-2 mt-2 overflow-hidden">
        <Card today={false} />
        <Card today={false} />
        <Card today={false} />
        <Card today={false} />
      </div>
    </div>
  );
}

export default FutureForecastCards;
