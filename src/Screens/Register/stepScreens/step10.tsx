import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";
import CustomIcon from "../../../Components/CustomIcon";
import ICONS from "../../../Assets/Icons";
import { CustomText } from "../../../Components/CustomText";
import COLORS from "../../../Utilities/Colors";

const Step10 = () => {
  const renderItem = (icon: any, text: string) => (
    <View style={styles.itemscontainer}>
      <CustomIcon Icon={ICONS.RightTick} height={10.02} width={14.14} />
      <CustomText fontSize={12} fontFamily="regular" style={{ width: "90%" }}>
        {text}
      </CustomText>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <CustomIcon Icon={ICONS.EnableLocation} height={80} width={80} />
      </View>
      <CustomText
        fontSize={24}
        fontFamily="bold"
        style={{ textAlign: "center", marginTop: verticalScale(10) }}
      >
        Enable location
      </CustomText>
      <CustomText
        fontSize={12}
        fontFamily="regular"
        style={{
          textAlign: "center",
          marginTop: verticalScale(10),
        }}
      >
        To use Baccvs, you’ll need to enable your location.
      </CustomText>
      <View style={styles.listCont}>
        <CustomText
          fontSize={16}
          fontFamily="medium"
          style={{ marginBottom: verticalScale(10) }}
        >
          Why you need to enable location
        </CustomText>
        {renderItem(ICONS.RightTick, "To help match you with people nearby. ")}
        {renderItem(
          ICONS.RightTick,
          "Streamline your search for events and connections around you."
        )}
        {renderItem(ICONS.RightTick, "Discover trending events in your city. ")}
        {renderItem(
          ICONS.RightTick,
          "Receive real-time updates about activities happening near you."
        )}
        {renderItem(
          ICONS.RightTick,
          "Unlock personalized recommendations based on your location. "
        )}
      </View>
    </View>
  );
};

export default Step10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(10),
  },
  listCont: {
    backgroundColor: COLORS.darkVoilet,
    padding: verticalScale(20),
    borderRadius: 16,
    marginTop: verticalScale(20),
  },

  itemscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(15),
    paddingVertical: verticalScale(10),
  },
});
