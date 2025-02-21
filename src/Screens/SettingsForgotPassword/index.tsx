import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import CustomInput from "../../Components/CustomInput";
import { verticalScale } from "../../Utilities/Metrics";
import CustomButton from "../../Components/Buttons/CustomButton";
import { ForgotPasswordProps, VerifyPasswordProps } from "../../Typings/route";
import styles from "./styles";

const SettingsForgotPassword: FC<ForgotPasswordProps> = ({ navigation }) => {
  const [enterEmail, setEnterEmail] = useState<string>("");

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
            Forgot your password?
          </CustomText>
          <CustomText
            fontFamily="regular"
            fontSize={12}
            style={{ color: COLORS.greyMedium, marginTop: verticalScale(10) }}
          >
            No worries! Enter your email and we’ll send you a reset link.
          </CustomText>

          <View style={{ marginTop: verticalScale(20) }}>
            <CustomText fontFamily="medium" fontSize={14}>
              Email
            </CustomText>
            <CustomInput
              value={enterEmail}
              placeholder="Enter your email"
              onChangeText={setEnterEmail}
              style={{ marginTop: verticalScale(15) }}
            />
          </View>
        </View>

        <CustomButton
          title="Send Reset Link"
          onPress={() => {
            navigation.goBack();
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

export default SettingsForgotPassword;
