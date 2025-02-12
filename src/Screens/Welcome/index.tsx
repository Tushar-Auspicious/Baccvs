import { View, Text, SafeAreaView, Image } from "react-native";
import React, { FC } from "react";
import { WelcomeProps } from "../../Typings/route";
import styles from "./style";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import IMAGES from "../../Assets/Images";
import { CustomText } from "../../Components/CustomText";
import { horizontalScale, responsiveFontSize } from "../../Utilities/Metrics";
import CustomButton from "../../Components/Buttons/CustomButton";

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  const handleContinue = () => navigation.navigate("register");

  const renderItem = (icon: any, text: string) => (
    <View style={styles.itemscontainer}>
      <CustomIcon Icon={icon} height={24} width={24} />
      <CustomText
        fontSize={responsiveFontSize(12)}
        fontFamily="regular"
        style={styles.Whatawaits}
      >
        {text}
      </CustomText>
      <View style={styles.bottomline} />
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: horizontalScale(20) }}>
          <CustomIcon
            Icon={ICONS.backArrow}
            height={24}
            width={24}
            onPress={() => navigation.goBack()}
          />
          <Image source={IMAGES.applogo} style={styles.logoimg} />
          <CustomText
            fontSize={responsiveFontSize(24)}
            fontFamily="bold"
            style={styles.welcometxt}
          >
            Welcome to Baccvs
          </CustomText>
          <CustomText
            fontSize={responsiveFontSize(12)}
            fontFamily="regular"
            style={styles.welcometxt}
          >
            Let’s create your account to get started.
          </CustomText>

          <View style={styles.eventplansvw}>
            <CustomText fontSize={responsiveFontSize(16)} fontFamily="medium">
              What awaits
            </CustomText>
            {renderItem(
              ICONS.UniqueEvents,
              "Explore unique events tailored to your interests."
            )}
            <View style={styles.bottomline} />
            {renderItem(
              ICONS.blueHeart,
              "Meet people who share your vibe and passions."
            )}
            <View style={styles.bottomline} />
            {renderItem(
              ICONS.Chatsicon,
              "Plan, chat, and connect effortlessly."
            )}
          </View>
        </View>
        <CustomButton
          title="Let’s Go"
          onPress={handleContinue}
          style={styles.buttonstyle}
        />
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
