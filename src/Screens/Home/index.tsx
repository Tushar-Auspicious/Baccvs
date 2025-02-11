import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomText } from "../../Components/CustomText";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";

const Home = () => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row", gap: horizontalScale(10) }}>
          <CustomIcon Icon={ICONS.AppLogo} />
          <CustomText
            fontFamily="bold"
            color={COLORS.primaryPink}
            fontSize={20}
          >
            Baccvs
          </CustomText>
        </View>

        <View></View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    padding: verticalScale(10),
  },
  scrollContainer: {
    paddingVertical: verticalScale(20),
  },
});
