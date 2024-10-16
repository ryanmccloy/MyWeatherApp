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
