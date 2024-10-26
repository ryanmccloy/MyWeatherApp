function WeatherIcon({ icon, main }) {
  return (
    <div
      className={`flex justify-center ${
        main === true ? "w-[75%] max-w-[300px]" : ""
      }  `}
    >
      <img
        src={`./V2_icons/large/png/${icon}.png`}
        className={`w-full h-full object-contain ${
          main === true ? "" : "lg:w-[60%]"
        }  `}
        alt="Weather Icon"
      />
    </div>
  );
}

export default WeatherIcon;
