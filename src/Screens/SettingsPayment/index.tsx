import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SettingsPaymentProps } from "../../Typings/route";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import styles from "./styles";

const SettingsPayment: FC<SettingsPaymentProps> = ({ navigation }) => {
  const accounts: {
    icon: any;
    title: string;
    description: string;
    onPress: () => void;
  }[] = [
    {
      icon: ICONS.PaymentMethodIcon,
      title: "Payment Method",
      description: "Add, Edit, or Remove Credit/Debit Cards or Wallets.",
      onPress: () => {
        navigation.navigate("paymentMethodStack", { screen: "paymentMethod" });
      },
    },
    {
      icon: ICONS.BillingHostoryIcon,
      title: "Billing History",
      description:
        "View past transactions (e.g., ticket purchases, premium upgrades)",
      onPress: () => {},
    },
    {
      icon: ICONS.SubscriptionIcon,
      title: "Subscription Management",
      description: "View/Upgrade/Cancel Premium Plans.",
      onPress: () => {},
    },
  ];

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
            Payment
          </CustomText>
        </View>
        {accounts.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              gap: horizontalScale(20),
              marginTop: 10,
            }}
            onPress={item.onPress}
            activeOpacity={0.8}
          >
            <CustomIcon Icon={item.icon} height={20} width={20} />
            <View>
              <CustomText fontFamily="medium" fontSize={16}>
                {item.title}
              </CustomText>
              <CustomText
                fontFamily="regular"
                fontSize={12}
                color={COLORS.greyMedium}
                style={{
                  lineHeight: 18,
                  marginTop: verticalScale(5),
                  width: "80%",
                }}
              >
                {item.description}
              </CustomText>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </View>
  );
};

export default SettingsPayment;


