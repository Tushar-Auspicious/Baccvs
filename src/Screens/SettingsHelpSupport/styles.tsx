import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingVertical: verticalScale(15),
  },
  safeAreaCont: {
    flex: 1,
    gap: verticalScale(30),
    paddingHorizontal: horizontalScale(20),
  },
  innercontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(20),
  },
  supportcontent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  orContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  linebar: {
    borderBottomWidth: 1,
    borderColor: COLORS.voilet,
    flex: 1,
  },
});

export default styles;
