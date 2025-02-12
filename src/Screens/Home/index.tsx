import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";
import CustomButton from "../../Components/Buttons/CustomButton";
import EventListCard from "../../Components/Cards/EventListCard";
import CardSwiper from "../../Components/CardSwiper";
import { data } from "../../Components/CardSwiper/data";

const Home = () => {
  const isNewUSer = true;
  const insets = useSafeAreaInsets();

  const renderFirstPostCard = () => {
    return (
      <View
        style={{
          paddingHorizontal: verticalScale(10),
          borderBottomColor: COLORS.darkPink,
          borderBottomWidth: 0.5,
          paddingBottom: verticalScale(15),
        }}
      >
        <CustomText fontFamily="bold" fontSize={24}>
          Make your first post
        </CustomText>
        <CustomText
          fontFamily="medium"
          fontSize={12}
          style={{ marginVertical: verticalScale(15) }}
          color={COLORS.greyMedium}
        >
          Your journey starts here! Share what you're up to, ask for
          recommendations, or let others know what kind of events you're into.
          It's the perfect way to start connecting!
        </CustomText>
        <CustomButton
          title="Create a Post"
          onPress={() => {}}
          textSize={14}
          textColor={COLORS.darkPink}
          isFullWidth={false}
          style={{
            width: "auto",
            backgroundColor: COLORS.whitePink,
            paddingVertical: verticalScale(8),
            paddingHorizontal: horizontalScale(14),
            borderRadius: 20,
            alignSelf: "flex-start",
          }}
        />
      </View>
    );
  };

  const renderRefrBanner = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.darkVoilet,
          paddingHorizontal: horizontalScale(16),
          paddingVertical: verticalScale(16),
          flexDirection: "row",
          alignContent: "center",
          alignSelf: "center",
          width: wp(95),
          justifyContent: "center",
          gap: horizontalScale(20),
          borderRadius: verticalScale(10),
        }}
      >
        <CustomIcon height={50} width={50} Icon={ICONS.ReferIcon} />
        <View
          style={{
            justifyContent: "space-between",
            paddingVertical: verticalScale(2),
          }}
        >
          <CustomText fontFamily="bold" fontSize={20}>
            Refer a friend
          </CustomText>
          <CustomText fontSize={12} color={COLORS.greyMedium}>
            Invite your friends and family to join Baccvs
          </CustomText>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: verticalScale(10),
        }}
      >
        <View style={{ flexDirection: "row", gap: horizontalScale(10) }}>
          <CustomIcon Icon={ICONS.AppLogo} />
          <CustomText
            fontFamily="bold"
            color={COLORS.primaryPink}
            fontSize={20}
          >
            Baccvs
          </CustomText>
        </View>

        <View style={{ flexDirection: "row", gap: horizontalScale(20) }}>
          <CustomIcon Icon={ICONS.SearchIcon} />
          <CustomIcon Icon={ICONS.NotificationIcon} />
          <CustomIcon Icon={ICONS.MapPinIcon} />
          <CustomIcon Icon={ICONS.MenuIcon} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          {
            paddingBottom: verticalScale(80) + insets.bottom,
          },
        ]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        {isNewUSer && renderFirstPostCard()}

        <View style={{ gap: verticalScale(5) }}>
          <View
            style={{
              width: wp(90),
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText fontFamily="medium">Suggested Events</CustomText>
            <CustomText
              fontFamily="bold"
              fontSize={14}
              color={COLORS.lightPink}
            >
              See all
            </CustomText>
          </View>
          <FlatList
            data={Array.from({ length: 10 })}
            horizontal
            contentContainerStyle={{
              gap: horizontalScale(20),
              paddingHorizontal: horizontalScale(20),
            }}
            renderItem={({ item, index }) => {
              return (
                <EventListCard
                  imageUrl="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D"
                  title="Speed Dating & Trivia Ni..."
                  distance="2km away"
                  date="10 Feb 2025"
                  time="7: 00 PM"
                  address="Quizzy Café, 22 Knowledge Lane, Town..."
                  onPress={() => {}}
                />
              );
            }}
          />
        </View>

        {renderRefrBanner()}
        <View>
          <View
            style={{
              width: wp(90),
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText fontFamily="medium">People you might like</CustomText>
            <CustomText
              fontFamily="bold"
              fontSize={14}
              color={COLORS.lightPink}
            >
              See all
            </CustomText>
          </View>
          <CardSwiper data={data} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingVertical: verticalScale(10),
    gap: verticalScale(20),
  },
  scrollContainer: {
    paddingTop: verticalScale(20),
    gap: verticalScale(20),
  },
});
