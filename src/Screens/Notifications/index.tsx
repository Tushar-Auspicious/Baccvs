import React, { FC } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import notificationsData from "../../Seeds/NotificationsData";
import { NotificationScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";

const Notifications: FC<NotificationScreenProps> = ({navigation}) => {
  const NotificationItem = ({ item }: any) => {
    return (
      <View style={[styles.notificationContainer, {
        backgroundColor: item.isSeen ? 'transparent': COLORS.primaryPink
      }]}>
        {item.user?.profilePic && (
          <Image
            source={{ uri: item.user.profilePic }}
            style={styles.profilePic}
          />
        )}
        <View style={styles.textContainer}>
          <CustomText fontFamily="medium" fontSize={14}>
            {item.message}
          </CustomText>
          <CustomText fontSize={12} color={COLORS.greyMedium}>
            {item.time}
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomIcon
          Icon={ICONS.backArrow}
          height={20}
          width={20}
          onPress={() => navigation.goBack()}
        />
        <CustomText fontFamily="medium">Notifications</CustomText>
      </View>
      <View>

      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContainer}
        />
        </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingVertical: verticalScale(16),
    gap: verticalScale(30),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(20),
    paddingHorizontal: horizontalScale(16),
  },
  listContainer: {
    paddingBottom: verticalScale(40),
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(12),
    gap: horizontalScale(15)
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
  },
});
