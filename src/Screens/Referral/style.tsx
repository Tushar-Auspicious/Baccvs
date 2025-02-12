import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, wp } from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.appBackground },
  Referralcode: {
    marginTop: 20,
  },
  flexInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkVoilet,
    marginTop: 20,
    opacity: 0.39,
  },
  buttonstyle: {
    width: wp(90),
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 25,
    position: "absolute",
    bottom: 50,
  },
  buttonActive: {
    backgroundColor: COLORS.primaryPink,
  },
  buttonInactive: {
    opacity: 0.29,
  },
  innercontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
