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
