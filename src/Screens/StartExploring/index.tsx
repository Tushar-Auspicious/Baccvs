import { View } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { CustomText } from "../../Components/CustomText";
import { verticalScale } from "../../Utilities/Metrics";
import CustomButton from "../../Components/Buttons/CustomButton";
import { StartExploringIndicatorProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";

const StartExploring: FC<StartExploringIndicatorProps> = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("signIn");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <View style={{ flex: 1, marginTop: verticalScale(40) }}>
          <CustomText fontSize={24} fontFamily="bold" style={styles.textstyle}>
            Hey Wilson! You’re all set
          </CustomText>
          <CustomText
            fontSize={12}
            fontFamily="regular"
            style={[
              styles.acccreated,
              {
                marginTop: verticalScale(10),
                color: COLORS.greyMedium,
              },
            ]}
          >
            Your Baccvs account has been created successfully.
          </CustomText>
        </View>
        <CustomButton title="Start exploring" onPress={onContinue} />
      </SafeAreaView>
    </View>
  );
};

export default StartExploring;
