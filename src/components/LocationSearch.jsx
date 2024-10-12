import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";

import { useWeather } from "../contexts/WeatherProvider";
import { checkSearchLocationIsValidInput } from "../helper";

function LocationSearch() {
  const [searchLocation, setSearchLocation] = useState("");
  const inputRef = useRef(null);

  const { setUserInput } = useWeather();

  const handleSubmit = function (e) {
    e.preventDefault();
    const trimmedLocation = searchLocation.trim();

    if (!checkSearchLocationIsValidInput(trimmedLocation)) {
      toast.error("Invalid input! Please only use letters and spaces", {
        duration: 3000,
      });
      return;
    }

    inputRef.current.blur();
    setUserInput(trimmedLocation);
  };

  return (
    <header>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        className="flex  justify-center gap-2 text-gray-800"
        onSubmit={handleSubmit}
        role="search"
      >
        <div className="relative">
          <input
            ref={inputRef}
            className="rounded-md p-2 pr-10 bg-white/80   "
            type="text"
            id="location"
            name="location"
            placeholder="Tokyo..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            aria-label="Search for a location"
          ></input>

          <button
            type="submit"
            className="absolute inset-y-0 right-2 flex items-center justify-center"
            aria-label="Search"
          >
            <CiSearch size={24} className="" />
          </button>
        </div>
      </form>
    </header>
  );
}

export default LocationSearch;
