import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SettingsHelpSupportProps } from "../../Typings/route";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import styles from "./styles";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomInput from "../../Components/CustomInput";
import { KeyboardAvoidingContainer } from "../../Components/KeyboardAvoidingComponent";
import CustomButton from "../../Components/Buttons/CustomButton";

const SupportOption = ({ icon, title, subtitle, onPress }: any) => (
  <View style={styles.supportcontent}>
    <View style={[styles.supportcontent, { gap: horizontalScale(15) }]}>
      <CustomIcon Icon={icon} height={30} width={30} />
      <View>
        <CustomText fontFamily="medium" fontSize={14}>
          {title}
        </CustomText>
        <CustomText
          fontFamily="regular"
          fontSize={12}
          style={{ color: COLORS.greyMedium, marginTop: verticalScale(5) }}
        >
          {subtitle}
        </CustomText>
      </View>
    </View>
    <CustomIcon
      Icon={ICONS.UprightArrowIcon}
      height={8.01}
      width={8.01}
      onPress={onPress}
    />
  </View>
);

const SettingsHelpSupport: FC<SettingsHelpSupportProps> = ({ navigation }) => {
  const [complainSubject, setComplainSubject] = useState("");
  const [complainDescription, setComplainDescription] = useState("");

  return (
    <KeyboardAvoidingContainer>
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
              Help and support
            </CustomText>
          </View>

          <SupportOption
            icon={ICONS.SettingwhatsappIcon}
            title="Chat on WhatsApp"
            subtitle="+62 812 3456 7890"
            onPress={() => {}}
          />

          <SupportOption
            icon={ICONS.SettingsmailIcon}
            title="Send an Email"
            subtitle="support@baccvs.com"
            onPress={() => {}}
          />

          <SupportOption
            icon={ICONS.SettingcallIcon}
            title="Call our Phone"
            subtitle="+62 812 3456 7890"
            onPress={() => {}}
          />

          <View style={styles.orContent}>
            <View style={styles.linebar} />
            <CustomText
              fontSize={12}
              color={COLORS.greyMedium}
              fontFamily="medium"
            >
              Or
            </CustomText>
            <View style={styles.linebar} />
          </View>

          <View>
            <CustomText fontSize={20} fontFamily="medium">
              Do you have any question?
            </CustomText>
            <CustomText
              fontSize={12}
              fontFamily="regular"
              style={{ color: COLORS.greyMedium, marginTop: verticalScale(10) }}
            >
              Feel free to contact us
            </CustomText>
          </View>

          <View>
            <CustomText fontSize={14} fontFamily="medium">
              Subject
            </CustomText>
            <CustomInput
              value={complainSubject}
              placeholder="Enter complain subject"
              onChangeText={setComplainSubject}
              style={{ marginTop: verticalScale(15) }}
            />

            <CustomText
              fontSize={14}
              fontFamily="medium"
              style={{ marginTop: verticalScale(20) }}
            >
              Description
            </CustomText>
            <CustomInput
              value={complainDescription}
              onChangeText={setComplainDescription}
              placeholder="Write a short description about this event"
              multiline
              type="textArea"
              textAlignVertical="top"
              inputStyle={{
                paddingVertical: verticalScale(10),
                minHeight: verticalScale(120),
                marginTop: verticalScale(5),
              }}
              style={{ marginTop: verticalScale(15) }}
            />
          </View>

          <CustomButton
            title="Send Message"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </SafeAreaView>
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default SettingsHelpSupport;
