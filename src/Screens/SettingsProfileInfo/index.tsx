import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { ProfileInformationProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import styles from "./styles";

const SettingsProfileInfo: FC<ProfileInformationProps> = ({ navigation }) => {
  const data: {
    title: string;
    description: string;
    onPress: () => void;
  }[] = [
    {
      title: "Email Address",
      description: "wilsonmark@mail.com",
      onPress: () =>
        navigation.navigate("changeEmailStack", { screen: "verifyPassword" }),
    },
    {
      title: "Phone Number",
      description: "+62 21 1234 5678",
      onPress: () =>
        navigation.navigate("changePhoneNumber", {
          screen: "changePhoneNumber",
        }),
    },
    {
      title: "Forgot Password",
      description: "Change your password.",
      onPress: () => navigation.navigate("forgotPassword"),
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
            Profile information
          </CustomText>
        </View>
        {data.map((item, index) => (
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
            <View>
              <CustomText fontFamily="medium" fontSize={16}>
                {item.title}
              </CustomText>
              <CustomText
                fontFamily="regular"
                fontSize={12}
                color={COLORS.greyMedium}
                style={{
                  marginTop: verticalScale(5),
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

export default SettingsProfileInfo;
