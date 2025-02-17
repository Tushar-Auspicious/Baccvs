import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import {
  AccountScreenProps,
  SettingsScreenProps,
  SettingsStackParams,
} from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import styles from "./styles";

const AccountScreen: FC<AccountScreenProps> = ({ navigation }) => {
  const accounts: {
    icon: any;
    title: string;
    description: string;
    screen: keyof SettingsStackParams | any;
  }[] = [
    {
      icon: ICONS.SettingUserIcon,
      title: "Profile Information",
      description:
        "See your profile information like your phone number and email address",
      screen: "profileInfo",
    },
    {
      icon: ICONS.NotificationIcon,
      title: "Password and Security",
      description: "Change your password and enable extra security features.",
      screen: "settingNotification",
    },
    {
      icon: ICONS.SettingsPaymentIcon,
      title: "Privacy Preferences",
      description: "Control who can see your profile, age, and activity.",
      screen: "payments",
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
            Account
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
            onPress={() => navigation.navigate(item.screen)}
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

export default AccountScreen;
