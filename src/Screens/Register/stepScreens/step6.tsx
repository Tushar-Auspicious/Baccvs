import React from "react";
import { StyleSheet, View } from "react-native";
import ICONS from "../../../Assets/Icons";
import CustomIcon from "../../../Components/CustomIcon";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";

const Step6 = () => {
  const renderItem = (icon: any, text: string) => (
    <View style={styles.itemscontainer}>
      <CustomIcon Icon={ICONS.RightTick} height={10.02} width={14.14} />
      <CustomText fontSize={12} fontFamily="regular">
        {text}
      </CustomText>
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomText fontSize={24} fontFamily="bold">
        What’s your date of birth?
      </CustomText>

      <CustomText fontSize={12} fontFamily="regular" color={COLORS.greyMedium}>
        Your age will be public
      </CustomText>

      <View style={styles.listCont}>
        <CustomText
          fontSize={16}
          fontFamily="medium"
          style={{ marginBottom: verticalScale(10) }}
        >
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
    gap: verticalScale(15),
  },

  listCont: {
    backgroundColor: COLORS.darkVoilet,
    padding: verticalScale(15),
    borderRadius: 16,
  },

  itemscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
    paddingVertical: verticalScale(15),
  },
});
