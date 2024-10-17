const icons = [
  "10000",
  "10001",
  "10011",
  "11000",
  "10001",
  "10010",
  "11020",
  "11021",
  "11030",
  "11031",
  "20000",
  "21000",
  "40010",
  "51000",
  "70000",
  "80000",
];

function InitialPageLoad() {
  return (
    <div className="overflow-hidden">
      <div className="flex  ">
        {/* First set of icons */}
        <div className="flex-shrink-0 animate-slide">
          {icons.map((icon, i) => (
            <img
              src={`/V2_icons/large/png/${icon}.png`}
              key={`first-${i}`}
              alt="Weather Icon"
              className="inline-block mr-5"
            />
          ))}
        </div>

        {/* Second set of identical icons */}
        <div className="flex-shrink-0 animate-slide">
          {icons.map((icon, i) => (
            <img
              src={`/V2_icons/large/png/${icon}.png`}
              key={`second-${i}`}
              alt="Weather Icon"
              className="inline-block mr-5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InitialPageLoad;
