import { View, Text, SafeAreaView, Alert } from "react-native";
import React, { FC, useState } from "react";
import { ReferralProps } from "../../Typings/route";
import styles from "./style";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, responsiveFontSize } from "../../Utilities/Metrics";
import { CustomText } from "../../Components/CustomText";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/Buttons/CustomButton";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.innercontainer}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={24}
            width={24}
            onPress={() => navigation.goBack()}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(16),
              color: COLORS.primaryPink,
            }}
          >
            Sign in
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <CustomText
            fontSize={responsiveFontSize(24)}
            fontFamily="bold"
            style={styles.Referralcode}
          >
            Referral code
          </CustomText>
          <CustomText
            fontSize={responsiveFontSize(12)}
            fontFamily="regular"
            style={{ marginTop: 10 }}
          >
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
          style={[
            styles.buttonstyle,
            {
              backgroundColor:
                referralCode.length > 0
                  ? COLORS.primaryPink
                  : COLORS.darkVoilet,
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
};

export default Referral;
