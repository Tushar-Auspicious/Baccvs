import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../Utilities/Colors";
import { assets } from "../../../react-native.config";
import IMAGES from "../../Assets/Images";
import { CustomText } from "../../Components/CustomText";
import { hp, responsiveFontSize, wp } from "../../Utilities/Metrics";

const Splash = () => {
  return (
    <View style={styles.mainview}>
      <Image
        source={IMAGES.applogo}
        style={{ height: 159.02, width: 123, resizeMode: "contain" }}
      />
      <CustomText
        fontSize={responsiveFontSize(30)}
        fontFamily="medium"
        style={styles.text}
      >
        Baccvs
      </CustomText>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    marginTop: 10,
  },
});
