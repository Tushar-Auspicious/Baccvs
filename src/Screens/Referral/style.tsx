import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingVertical: verticalScale(15),
  },

  safeAreaCont: {
    flex: 1,
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
  },

  innercontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flexInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.voilet,
    marginTop: verticalScale(10),
  },
});

export default styles;
