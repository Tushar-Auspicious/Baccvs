import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import CustomInput from "../../Components/CustomInput";
import { verticalScale } from "../../Utilities/Metrics";
import CustomButton from "../../Components/Buttons/CustomButton";
import { VerifyPasswordProps } from "../../Typings/route";

const VerifyPassword: FC<VerifyPasswordProps> = ({ navigation }) => {
  const [enterPassword, setEnterPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <CustomIcon
          Icon={ICONS.backArrow}
          height={20}
          width={20}
          onPress={() => navigation.goBack()}
        />
        <View style={{ flex: 1 }}>
          <CustomText fontFamily="bold" fontSize={24}>
            Enter your password
          </CustomText>
          <CustomText
            fontFamily="regular"
            fontSize={12}
            style={{ color: COLORS.greyMedium, marginTop: verticalScale(10) }}
          >
            Re-enter your Baccvs password to continue
          </CustomText>

          <View style={{ marginTop: verticalScale(20) }}>
            <CustomText fontFamily="medium" fontSize={14}>
              Password
            </CustomText>
            <CustomInput
              value={enterPassword}
              placeholder="Enter password"
              onChangeText={setEnterPassword}
              type="password"
              style={{ marginTop: verticalScale(15) }}
            />
          </View>
        </View>

        <CustomButton
          title="Next"
          onPress={() => {
            navigation.replace("changeEmail");
          }}
          style={{
            width: "auto",
            alignSelf: "flex-end",
            marginTop: verticalScale(20),
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default VerifyPassword;
