import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import { SettingsPaymentProps } from "../../Typings/route";
import styles from "./styles";

const SettingsPaymentMethod: FC<SettingsPaymentProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaCont}>
        <View style={styles.innercontainer}>
          <View style={styles.headerContainer}>
            <CustomIcon
              Icon={ICONS.backArrow}
              height={20}
              width={20}
              onPress={() => navigation.goBack()}
            />
            <CustomText fontFamily="medium" fontSize={16}>
              Payment method
            </CustomText>
          </View>
          <CustomIcon
            Icon={ICONS.PaymentplusIcon}
            height={16}
            width={16}
            onPress={() => {
              navigation.navigate("paymentMethodStack", {
                screen: "addPaymentMethod",
              });
            }}
          />
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <CustomText
            fontFamily="medium"
            fontSize={16}
            style={{ lineHeight: 24, textAlign: "center" }}
          >
            No payment add
          </CustomText>
          <CustomText
            fontFamily="regular"
            fontSize={12}
            style={{ lineHeight: 18, textAlign: "center" }}
          >
            You haven’t added any payment method yet
          </CustomText>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingsPaymentMethod;
