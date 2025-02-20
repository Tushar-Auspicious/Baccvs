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
