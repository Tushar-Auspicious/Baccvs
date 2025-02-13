import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomText } from "../../../Components/CustomText";
import {
  horizontalScale,
  responsiveFontSize,
  verticalScale,
} from "../../../Utilities/Metrics";
import COLORS from "../../../Utilities/Colors";
import CustomIcon from "../../../Components/CustomIcon";
import ICONS from "../../../Assets/Icons";

const Step6 = () => {
  const renderItem = (icon: any, text: string) => (
    <View style={styles.itemscontainer}>
      <CustomIcon Icon={ICONS.RightTick} height={10.02} width={14.14} />
      <CustomText
        fontSize={responsiveFontSize(12)}
        fontFamily="regular"
        style={styles.Whatawaits}
      >
        {text}
      </CustomText>
    </View>
  );
  return (
    <View style={styles.container}>
      <CustomText fontSize={responsiveFontSize(24)} fontFamily="bold">
        What’s your date of birth?
      </CustomText>

      <CustomText
        fontSize={responsiveFontSize(12)}
        fontFamily="regular"
        style={{ color: COLORS.greyMedium, marginTop: verticalScale(10) }}
      >
        Your age will be public
      </CustomText>
      <View style={styles.publicage}>
        <CustomText fontSize={responsiveFontSize(16)} fontFamily="medium">
          Why your age will be public?
        </CustomText>
        {renderItem(
          ICONS.RightTick,
          "You get matched with your preferred age "
        )}
        {renderItem(
          ICONS.RightTick,
          "It helps others filter their preferences"
        )}
        {renderItem(
          ICONS.RightTick,
          "It saves time and promotes transparency "
        )}
      </View>
    </View>
  );
};

export default Step6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  Whatawaits: { color: COLORS.greyMedium },
  itemscontainer: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },

  publicage: {
    backgroundColor: COLORS.inputColor,
    padding: 20,
    marginTop: verticalScale(30),
    borderRadius: 16,
    opacity: 0.5,
  },
});
