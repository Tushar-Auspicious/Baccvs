import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  stepsOuterView: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
    justifyContent: "space-between",
  },
  stepscount: {
    width: wp(6),
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.primaryPink,
  },
  buttonstyle: {
    width: wp(90),
    alignSelf: "center",
    marginBottom: verticalScale(10),
    borderRadius: 25,
    position: "absolute",
    bottom: 50,
    backgroundColor: COLORS.primaryPink,
  },
});
export default styles;
