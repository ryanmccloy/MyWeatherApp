function WeatherIcon({ icon }) {
  return (
    <div className="w-[75%]">
      <img
        src={`./V2_icons/large/png/${icon}.png`}
        className="w-full h-full object-contain "
        alt="Weather Icon"
      />
    </div>
  );
}

export default WeatherIcon;
