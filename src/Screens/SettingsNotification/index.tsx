import { Switch, TouchableOpacity, View } from "react-native";
import React, { FC, useState } from "react";
import { SettingsNotificaitonProps } from "../../Typings/route";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIcon from "../../Components/CustomIcon";
import ICONS from "../../Assets/Icons";
import { CustomText } from "../../Components/CustomText";
import styles from "./styles";
import COLORS from "../../Utilities/Colors";

const NotificationSetting = ({
  title,
  description,
  isEnabled,
  toggleSwitch,
}: {
  title: string;
  description: string;
  isEnabled: boolean;
  toggleSwitch: () => void;
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // marginBottom: 15,
    }}
  >
    <View style={{ width: "80%" }}>
      <CustomText fontFamily="medium" fontSize={16}>
        {title}
      </CustomText>
      <CustomText
        fontFamily="regular"
        fontSize={12}
        color={COLORS.greyMedium}
        style={{
          lineHeight: 18,
        }}
      >
        {description}
      </CustomText>
    </View>
    <Switch
      trackColor={{ false: COLORS.greyLight, true: COLORS.primaryPink }}
      thumbColor={isEnabled ? COLORS.white : COLORS.greyMedium}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
      }}
    />
  </View>
);

const SettingsNotification: FC<SettingsNotificaitonProps> = ({
  navigation,
}) => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);

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
            Notifications
          </CustomText>
        </View>

        {/* Render the NotificationSetting components */}
        <NotificationSetting
          title="Push Notifications"
          description="Stay updated in real-time with important alerts and updates."
          isEnabled={isEnabled1}
          toggleSwitch={toggleSwitch1}
        />

        <NotificationSetting
          title="Newsletter"
          description="Stay updated about latest news, promotions, and updates."
          isEnabled={isEnabled2}
          toggleSwitch={toggleSwitch2}
        />

        <NotificationSetting
          title="Events "
          description="Alerts for Upcoming Events, New Invitations, or Ticket Purchases."
          isEnabled={isEnabled3}
          toggleSwitch={toggleSwitch3}
        />

        <NotificationSetting
          title="Chats"
          description="Mute Chats or Group Notifications."
          isEnabled={isEnabled4}
          toggleSwitch={toggleSwitch4}
        />
      </SafeAreaView>
    </View>
  );
};

export default SettingsNotification;
