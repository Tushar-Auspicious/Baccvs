import React, { FC, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomIcon from "../../Components/CustomIcon";
import CustomInput from "../../Components/CustomInput";
import { CustomText } from "../../Components/CustomText";
import { SettingsAddPaymentMethodProps } from "../../Typings/route";
import { verticalScale } from "../../Utilities/Metrics";
import styles from "./styles";

const SettingsAddPaymentMethod: FC<SettingsAddPaymentMethodProps> = ({
  navigation,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [monthDays, setMonthDays] = useState("");
  const [cvvNumber, setCvvNumber] = useState("");

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
            Add payment method
          </CustomText>

          <View style={{ marginTop: verticalScale(20) }}>
            <CustomText fontFamily="medium" fontSize={14}>
              Card number
            </CustomText>
            <CustomInput
              value={cardNumber}
              placeholder="Enter card number"
              onChangeText={setCardNumber}
              style={styles.input}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <CustomText fontFamily="medium" fontSize={14}>
                Expires
              </CustomText>
              <CustomInput
                value={monthDays}
                placeholder="DD/MM/YYYY"
                type="date"
                onChangeText={setMonthDays}
                style={styles.input}
              />
            </View>
            <View style={styles.column}>
              <CustomText fontFamily="medium" fontSize={14}>
                CVV
              </CustomText>
              <CustomInput
                value={cvvNumber}
                placeholder="CVV"
                onChangeText={setCvvNumber}
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <CustomButton
          title="Save Card"
          onPress={() => {}}
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

export default SettingsAddPaymentMethod;
