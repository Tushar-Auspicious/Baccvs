import React, { FC, useState } from "react";
import { Alert, Text, View } from "react-native";
import ICONS from "../../Assets/Icons";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomIcon from "../../Components/CustomIcon";
import CustomInput from "../../Components/CustomInput";
import { CustomText } from "../../Components/CustomText";
import { ReferralProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { responsiveFontSize, verticalScale } from "../../Utilities/Metrics";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInHeader from "./SignInHeader/HeaderSignIn";

const Referral: FC<ReferralProps> = ({ navigation }) => {
  const [referralCode, setReferralCode] = useState("");

  const handleContinue = () => {
    if (referralCode.length > 0) {
      navigation.navigate("welcome");
    } else {
      Alert.alert("Please enter a referral code to continue");
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <SignInHeader onBackPress={() => navigation.goBack()} />
        <View style={{ gap: verticalScale(10), flex: 1 }}>
          <CustomText fontSize={24} fontFamily="bold">
            Referral code
          </CustomText>
          <CustomText fontSize={12} fontFamily="regular">
            You need an invitation to join Baccvs. Enter your unique referral
            code to continue
          </CustomText>

          <CustomInput
            value={referralCode}
            placeholder="Enter referral code"
            onChangeText={setReferralCode}
            style={styles.flexInput}
          />
        </View>
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          disabled={referralCode.length === 0}
          isFullWidth
        />
      </SafeAreaView>
    </View>
  );
};

export default Referral;
