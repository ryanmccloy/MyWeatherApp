import React from "react";
import toast from "react-hot-toast";

export function checkSearchLocationIsValidInput(input) {
  const validStringRegex = /^[A-Za-z\s]+$/;

  return validStringRegex.test(input);
}

export async function getLocalTimeZone(lat, lng) {
  try {
    const response = await fetch(
      `https://timeapi.io/api/timezone/coordinate?latitude=${lat}&longitude=${lng}`
    );

    if (!response.ok) {
      toast.error("Error fetching timezone", {
        duration: 3000,
      });

      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.timeZone;
  } catch (err) {
    console.error("Error fetching timezone data", err);
  }
}

export function convertToLocalTimeZone(timeZone, time) {
  // const date = new Date(time);

  const utcTime = time.endsWith("Z") ? time : `${time}Z`;
  const date = new Date(Date.parse(utcTime)); // Parse the time as UTC

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timeZone,
  };

  const localTime = new Intl.DateTimeFormat("en-US", options).format(date);

  return localTime;
}

export function isDayTime(currentTime, sunrise, sunset) {
  const baseDate = "2000-01-01";

  const currentTimeDate = new Date(`${baseDate} ${currentTime}`);
  const sunriseDate = new Date(`${baseDate} ${sunrise}`);
  const sunsetDate = new Date(`${baseDate} ${sunset}`);

  return currentTimeDate >= sunriseDate && currentTimeDate <= sunsetDate;
}

export function createClouds(numOfClouds, icon) {
  let cloudArr = Array.from({ length: numOfClouds }, (_, i) => i);

  return cloudArr.map((cloud) => {
    const randomMargin = Math.floor(Math.random() * (150 - 400) + 400);
    const randomHeight = Math.floor(Math.random() * (300 - 50) + 50);
    return React.createElement(
      "img",
      {
        src: `/V2_icons/large/png/${icon}.png`,
        key: cloud,
        alt: "Cloud Icon",
        className: "inline-block",
        style: {
          marginRight: `${randomMargin}px`,
          height: `${randomHeight}px`,
          width: "auto",
        },
      },
      null
    );
  });
}

export const weatherCodeColors = {
  0: {
    day: "bg-gray-100 text-gray-700 border-gray-200", // Unknown
    night: "bg-gray-800 text-gray-100 border-gray-600",
  },
  1000: {
    day: "bg-blue-100 text-blue-900 border-blue-300", // Clear, Sunny
    night: "bg-indigo-700 text-yellow-300 border-indigo-600",
  },
  1100: {
    day: "bg-blue-50 text-blue-800 border-blue-200", // Mostly Clear
    night: "bg-indigo-600 text-yellow-200 border-indigo-500",
  },
  1101: {
    day: "bg-sky-100 text-sky-800 border-sky-300", // Partly Cloudy
    night: "bg-sky-700 text-sky-200 border-sky-500",
  },
  1102: {
    day: "bg-sky-200 text-gray-800 border-sky-300", // Mostly Cloudy
    night: "bg-gray-700 text-gray-200 border-gray-500",
  },
  1001: {
    day: "bg-blue-50 text-gray-800 border-gray-300", // Cloudy
    night: "bg-gray-700 text-gray-300 border-gray-600",
  },
  2000: {
    day: "bg-slate-100 text-slate-800 border-slate-300", // Fog
    night: "bg-slate-800 text-slate-200 border-slate-600",
  },
  2100: {
    day: "bg-slate-50 text-slate-700 border-slate-200", // Light Fog
    night: "bg-slate-700 text-slate-300 border-slate-500",
  },
  4000: {
    day: "bg-teal-50 text-teal-800 border-teal-300", // Drizzle
    night: "bg-teal-700 text-teal-200 border-teal-500",
  },
  4001: {
    day: "bg-teal-100 text-teal-900 border-teal-400", // Rain
    night: "bg-teal-800 text-teal-200 border-teal-600",
  },
  4200: {
    day: "bg-cyan-50 text-cyan-800 border-cyan-300", // Light Rain
    night: "bg-cyan-700 text-cyan-200 border-cyan-500",
  },
  4201: {
    day: "bg-cyan-100 text-cyan-900 border-cyan-400", // Heavy Rain
    night: "bg-cyan-800 text-cyan-200 border-cyan-600",
  },
  5000: {
    day: "bg-indigo-50 text-indigo-800 border-indigo-300", // Snow
    night: "bg-indigo-700 text-indigo-200 border-indigo-600",
  },
  5001: {
    day: "bg-indigo-100 text-indigo-900 border-indigo-400", // Flurries
    night: "bg-indigo-800 text-indigo-300 border-indigo-500",
  },
  5100: {
    day: "bg-indigo-50 text-indigo-800 border-indigo-300", // Light Snow
    night: "bg-indigo-700 text-indigo-200 border-indigo-600",
  },
  5101: {
    day: "bg-indigo-200 text-indigo-900 border-indigo-400", // Heavy Snow
    night: "bg-indigo-800 text-indigo-100 border-indigo-700",
  },
  6000: {
    day: "bg-blue-50 text-blue-800 border-blue-200", // Freezing Drizzle
    night: "bg-blue-700 text-blue-200 border-blue-500",
  },
  6001: {
    day: "bg-blue-100 text-blue-900 border-blue-300", // Freezing Rain
    night: "bg-blue-800 text-blue-100 border-blue-600",
  },
  6200: {
    day: "bg-blue-50 text-blue-800 border-blue-200", // Light Freezing Rain
    night: "bg-blue-700 text-blue-200 border-blue-500",
  },
  6201: {
    day: "bg-blue-100 text-blue-900 border-blue-300", // Heavy Freezing Rain
    night: "bg-blue-800 text-blue-100 border-blue-600",
  },
  7000: {
    day: "bg-gray-50 text-gray-800 border-gray-300", // Ice Pellets
    night: "bg-gray-800 text-gray-200 border-gray-600",
  },
  7101: {
    day: "bg-gray-100 text-gray-900 border-gray-400", // Heavy Ice Pellets
    night: "bg-gray-800 text-gray-200 border-gray-700",
  },
  7102: {
    day: "bg-gray-50 text-gray-800 border-gray-300", // Light Ice Pellets
    night: "bg-gray-700 text-gray-200 border-gray-500",
  },
  8000: {
    day: "bg-purple-50 text-purple-800 border-purple-300", // Thunderstorm
    night: "bg-purple-800 text-yellow-200 border-purple-600",
  },
};
