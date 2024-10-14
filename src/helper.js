import toast from "react-hot-toast";

export function checkSearchLocationIsValidInput(input) {
  const validStringRegex = /^[A-Za-z\s]+$/;

  return validStringRegex.test(input);
}

export async function getLocalTimeZone(lat, lng) {
  try {
    console.log(lat, lng);
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

    // return data.timexone etc
    console.log(data);
  } catch (err) {
    console.error("Error fetching timezone data", err);
  }
}

export function checkDayorNight() {}
