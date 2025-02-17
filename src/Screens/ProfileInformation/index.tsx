import { View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { ProfileInformationProps } from "../../Typings/route";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import { verticalScale } from "../../Utilities/Metrics";

const ProfileInformation: FC<ProfileInformationProps> = ({ navigation }) => {
  const renderInfo = (label: string, value: string) => (
    <View style={{ marginTop: verticalScale(20) }}>
      <CustomText fontFamily="medium" fontSize={16} style={{ lineHeight: 24 }}>
        {label}
      </CustomText>
      <CustomText
        fontFamily="regular"
        fontSize={12}
        style={{ lineHeight: 24, color: COLORS.greyMedium }}
      >
        {value}
      </CustomText>
    </View>
  );

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
            Profile information Email Address
          </CustomText>
        </View>
        <View>
          {renderInfo("Email Address", "wilsonmark@mail.com")}
          {/* {renderInfo("Phone Number", "+62 21 1234 5678")} */}
          <TouchableOpacity
            style={{ marginTop: verticalScale(20) }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("changePhoneNumber")}
          >
            <CustomText
              fontFamily="medium"
              fontSize={16}
              style={{ lineHeight: 24 }}
            >
              Phone Number
            </CustomText>
            <CustomText
              fontFamily="regular"
              fontSize={12}
              style={{ lineHeight: 24, color: COLORS.greyMedium }}
            >
              +62 21 1234 5678
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginTop: verticalScale(20) }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("verifyPassword")}
          >
            <CustomText
              fontFamily="medium"
              fontSize={16}
              style={{ lineHeight: 24 }}
            >
              Forgot Password
            </CustomText>
            <CustomText
              fontFamily="regular"
              fontSize={12}
              style={{ lineHeight: 24, color: COLORS.greyMedium }}
            >
              Change your password
            </CustomText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileInformation;
