import dayjs from "dayjs";
import Toast from "react-native-toast-message";

export const showToast = (
  type: "success" | "error" | "info" | "warning",
  title: string,
  meessage?: string
) => {
  switch (type) {
    case "success":
      Toast.show({
        type: "success",
        text1: title,
        text2: meessage,
      });
      break;
    case "error":
      Toast.show({
        type: "error",
        text1: title,
        text2: meessage,
      });
      break;
    case "info":
      Toast.show({
        type: "info",
        text1: title,
        text2: meessage,
      });
      break;
    case "warning":
      Toast.show({
        type: "warning",
        text1: title,
        text2: meessage,
      });
      break;
    default:
      break;
  }
};

export const getRandomColor = () => {
  // Maximum value to ensure the color isn't too light (0-255 scale)
  const maxValue = 128; // Adjust this value to make colors darker or lighter, but keep it below 255/2 for readability

  let color = "#";
  for (let i = 0; i < 3; i++) {
    // We only need 3 components (RGB)
    // Generate a random number from 0 to maxValue
    let component = Math.floor(Math.random() * (maxValue + 1)).toString(16);
    // Ensure the component is two digits
    color += component.length === 1 ? "0" + component : component;
  }
  return color;
};

export const convertStringToDate = (dateString: string) => {
  // The format "Do MMM YYYY" matches "20th Mar 2025"
  const date = dayjs(dateString, "Do MMM YYYY");

  if (date.isValid()) {
    // Convert to Date object if needed
    return date.toDate();
  } else {
    console.error("Invalid date string provided:", dateString);
    return null; // or throw an error, or return a default date
  }
};

// Function to calculate distance between two coordinates using Haversine formula
export const getDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};
