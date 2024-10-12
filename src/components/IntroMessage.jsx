import LocationSearch from "./LocationSearch";

function IntroMessage() {
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <h1 className="text-center text-3xl mb-7">
        Enter a location to find out the current weather 🌤️
      </h1>
      <LocationSearch />
    </div>
  );
}

export default IntroMessage;
