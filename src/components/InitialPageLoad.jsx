import { createClouds } from "../../utils/helper";

// const icons = [
//   "10000",
//   "10001",
//   "10011",
//   "11000",
//   "10001",
//   "10010",
//   "11020",
//   "11021",
//   "11030",
//   "11031",
//   "20000",
//   "21000",
//   "40010",
//   "51000",
//   "70000",
//   "80000",
// ];

const firstSetClouds = createClouds(20, "10011");
const secondSetClouds = createClouds(20, "10011");
const thirdSetClouds = createClouds(20, "10011");

function InitialPageLoad() {
  return (
    <div className="relative">
      <img
        src="V2_icons/large/png/10000.png"
        className="absolute top-32 left-12 h-[150px]"
      />
      <div className="flex  ">
        {/* First set of icons */}
        <div className="flex-shrink-0 animate-slide ">{firstSetClouds}</div>

        {/* Second set of identical icons */}
        <div className="flex-shrink-0 animate-slide ">{firstSetClouds}</div>
      </div>

      <div className="flex  ">
        {/* First set of icons */}
        <div className="flex-shrink-0 animate-slide ">{secondSetClouds}</div>

        {/* Second set of identical icons */}
        <div className="flex-shrink-0 animate-slide ">{secondSetClouds}</div>
      </div>

      <div className="flex  ">
        {/* First set of icons */}
        <div className="flex-shrink-0 animate-slide ">{thirdSetClouds}</div>

        {/* Second set of identical icons */}
        <div className="flex-shrink-0 animate-slide ">{thirdSetClouds}</div>
      </div>
    </div>
  );
}

export default InitialPageLoad;
