export const weatherCodeDescription = {
  0: "Unknown",
  1000: "Clear, Sunny",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  1001: "Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm",
};

// Define color variables for easy management
const colors = {
  day: {
    main: "#a3cef1", // Light blue for daytime
    text: "#274c77", // Dark blue for text
  },
  night: {
    main: "#274c77", // Dark blue for nighttime
    text: "#e7ecef", // Light, soft off-white for nighttime text
  },
  weatherCondition: {
    main: "#6096ba", // Muted blue for weather conditions like rain, fog, snow
    text: "#274c77", // Dark blue for text
    nightText: "#e7ecef", // Light text for night conditions on weather backgrounds
  },
};

// Export the weather code colors
export const weatherCodeColors = {
  // Clear/Sunny and Mostly Clear
  1000: {
    day: { backgroundColor: colors.day.main, textColor: colors.day.text }, // Clear, Sunny
    night: { backgroundColor: colors.night.main, textColor: colors.night.text }, // Nighttime Clear
  },
  1100: {
    day: { backgroundColor: colors.day.main, textColor: colors.day.text }, // Mostly Clear
    night: { backgroundColor: colors.night.main, textColor: colors.night.text }, // Nighttime Mostly Clear
  },

  // Partly Cloudy
  1101: {
    day: { backgroundColor: colors.day.main, textColor: colors.day.text }, // Partly Cloudy
    night: { backgroundColor: colors.night.main, textColor: colors.night.text }, // Nighttime Partly Cloudy
  },

  // Mostly Cloudy / Overcast
  1102: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Mostly Cloudy
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Mostly Cloudy
  },

  // Cloudy
  1001: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Cloudy
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Cloudy
  },

  // Fog, Light Fog
  2000: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Fog
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Fog
  },
  2100: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Light Fog
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Light Fog
  },

  // Drizzle and Rain
  4000: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Drizzle
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Drizzle
  },
  4001: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Rain
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Rain
  },

  // Light and Heavy Rain
  4200: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Light Rain
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Light Rain
  },
  4201: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Heavy Rain
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Heavy Rain
  },

  // Snow and Heavy Snow
  5000: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Snow
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Snow
  },
  5101: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Heavy Snow
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Heavy Snow
  },

  // Ice Pellets and Freezing Rain
  7000: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Ice Pellets
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Ice Pellets
  },
  6001: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Freezing Rain
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Freezing Rain
  },

  // Thunderstorm
  8000: {
    day: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.text,
    }, // Thunderstorm
    night: {
      backgroundColor: colors.weatherCondition.main,
      textColor: colors.weatherCondition.nightText,
    }, // Nighttime Thunderstorm
  },
};
