import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  logoimg: {
    height: 56,
    width: 43.32,
    resizeMode: "contain",
    marginTop: verticalScale(50),
    justifyContent: "center",
    alignSelf: "center",
  },
  welcometxt: {
    textAlign: "center",
    marginTop: 10,
  },
  eventplansvw: {
    backgroundColor: COLORS.darkVoilet,
    padding: 20,
    marginTop: verticalScale(30),
    borderRadius: 16,
    opacity: 0.5,
  },
  Whatawaits: { color: COLORS.greyMedium },
  itemscontainer: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  bottomline: {
    borderBottomWidth: 0.7,
    borderColor: COLORS.primaryPink,
    marginTop: verticalScale(10),
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
