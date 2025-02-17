import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { ChangeEmailProps } from "../../Typings/route";
import { CustomText } from "../../Components/CustomText";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/Buttons/CustomButton";
import { verticalScale } from "../../Utilities/Metrics";

const ChangeEmail: FC<ChangeEmailProps> = ({ navigation }) => {
  const [currentEmail, setCurrentEmail] = useState("");
  const [enterNewMail, setEnterNewMail] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <View style={styles.innercontainer}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={20}
            width={20}
            onPress={() => navigation.goBack()}
          />
          <CustomText fontFamily="medium" fontSize={16}>
            Change email address
          </CustomText>
        </View>
        <View style={{ flex: 1 }}>
          <CustomText fontFamily="medium" fontSize={14}>
            Current email
          </CustomText>
          <CustomInput
            value={currentEmail}
            placeholder="wilsonmark@mail.com"
            onChangeText={setCurrentEmail}
            style={{ marginTop: verticalScale(15) }}
          />
          <CustomText
            fontFamily="medium"
            fontSize={14}
            style={{ marginTop: verticalScale(15) }}
          >
            New email
          </CustomText>
          <CustomInput
            value={enterNewMail}
            placeholder="Enter new email"
            onChangeText={setEnterNewMail}
            style={{ marginTop: verticalScale(15) }}
          />
        </View>
        <CustomButton
          title="Change email"
          onPress={() => {
            navigation.replace("verifyOtp");
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

export default ChangeEmail;
