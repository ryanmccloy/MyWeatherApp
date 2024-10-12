function WeatherIcon({ type }) {
  const icons = {
    rain: "rainy-5",
  };

  return (
    <div className="self-center w-full">
      <img
        src={`./weather-icons/animated/${icons[type]}.svg`}
        className="w-full h-full object-contain"
        alt={type}
      />
    </div>
  );
}

export default WeatherIcon;
