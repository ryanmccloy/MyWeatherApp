import Card from "./Card";

function TodayCard() {
  return (
    <div className="bg-white/10 border p-2 rounded-lg shadow-md">
      <h2 className="text-center font-semibold">TODAY</h2>
      <Card today={true} />
    </div>
  );
}

export default TodayCard;
