import { StyleSheet } from "react-native";
import COLORS from "../../Utilities/Colors";
import {
  deviceHeight,
  deviceWidth,
  horizontalScale,
  hp,
  responsiveFontSize,
  verticalScale,
  wp,
} from "../../Utilities/Metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  slideImage: {
    height: deviceHeight * 0.8,
    width: deviceWidth,
    justifyContent: "flex-end",
  },

  slideContainer: {
    alignItems: "center",
    width: wp(100),
    paddingHorizontal: wp(8),
  },
  slideTextCont: {
    gap: verticalScale(15),
    paddingHorizontal: horizontalScale(12),
  },

  subtitle: {
    color: COLORS.white,
    fontSize: responsiveFontSize(14),
    textAlign: "center",
    lineHeight: responsiveFontSize(24),
    width: "80%",
    alignSelf: "center",
  },

  title: {
    color: COLORS.white,
    fontSize: responsiveFontSize(22),
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  indicatorCont: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: verticalScale(10),
  },

  indicator: {
    height: verticalScale(7),
    width: verticalScale(7),
    backgroundColor: COLORS.darkVoilet,
    marginHorizontal: horizontalScale(5),
    borderRadius: 100,
  },

  indicatorActive: {
    backgroundColor: COLORS.primaryPink,
    width: horizontalScale(25),
  },

  text: {
    textAlign: "center",
    marginTop: 10,
  },
  buttonstyle: {
    width: wp(90),
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 25,
  },
});

export default styles;
