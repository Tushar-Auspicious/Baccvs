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
  input: {
    marginTop: verticalScale(15),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: horizontalScale(10),
    marginTop: verticalScale(20),
  },
  column: {
    flex: 1,
  },
});

export default styles;
