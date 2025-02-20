import React, { FC, useMemo, useRef, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import HomeScreenPostOption from "../../Components/BottomSheets/HomeScreenPostOption";
import CustomButton from "../../Components/Buttons/CustomButton";
import EventListCard from "../../Components/Cards/EventListCard";
import PostCard, { PostCardProps } from "../../Components/Cards/PostCard";
import CardSwiper from "../../Components/CardSwiper";
import { data } from "../../Components/CardSwiper/data";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import MainMenuModal from "../../Components/Modals/MainMenuModal";
import { setIsMainMenuVisible } from "../../Redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import dummyPosts from "../../Seeds/POstData";
import { HomeScreenProps } from "../../Typings/route";
import { RBSheetRef } from "../../Typings/type";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";

const Home: FC<HomeScreenProps> = ({ navigation }) => {
  const isNewUSer = true;
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const { isMainMenuVisible } = useAppSelector((state) => state.modals);

  const refRBSheet = useRef<RBSheetRef>(null);

  const [selectedPostforRepost, setSelectedPostforRepost] = useState<
    null | string
  >(null);

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
          backgroundColor: COLORS.voilet,
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

  const renderHeader = () => {
    return (
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
          <CustomIcon
            Icon={ICONS.SearchIcon}
            onPress={() => navigation.navigate("searchHome")}
          />
          <CustomIcon
            Icon={ICONS.NotificationIcon}
            onPress={() => navigation.navigate("notification")}
          />
          <CustomIcon
            Icon={ICONS.MapPinIcon}
            onPress={() => navigation.navigate("maps")}
          />
          <CustomIcon
            Icon={ICONS.MenuIcon}
            onPress={() => dispatch(setIsMainMenuVisible(true))}
          />
        </View>
      </View>
    );
  };

  const renderSuggestedEvents = () => {
    return (
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
            color={COLORS.mediuumPink}
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
    );
  };

  const renderPeopleYouMightKnow = () => {
    return (
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
            color={COLORS.mediuumPink}
          >
            See all
          </CustomText>
        </View>
        <CardSwiper data={data} />
      </View>
    );
  };

  const renderPosts = () => {
    return useMemo(() => {
      const specialComponents = [
        renderRefrBanner(),
        renderSuggestedEvents(),
        renderPeopleYouMightKnow(),
      ];

      // Generate unique random indices between 5 and 20
      const specialIndices = new Set<number>();
      while (specialIndices.size < specialComponents.length) {
        const randomIndex = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        specialIndices.add(randomIndex);
      }

      const mergedData: (
        | PostCardProps
        | { type: string; component: JSX.Element }
      )[] = [...dummyPosts];

      // Insert special components at the generated indices
      Array.from(specialIndices).forEach((index, i) => {
        if (index < mergedData.length) {
          mergedData.splice(index, 0, {
            type: `special-${i}`,
            component: specialComponents[i],
          });
        }
      });

      const renderItem = ({
        item,
        index,
      }: {
        item: PostCardProps | { type: string; component: JSX.Element };
        index: number;
      }) => {
        if ("component" in item) {
          return <View key={item.type}>{item.component}</View>;
        }
        return (
          <PostCard
            {...item}
            key={(item as PostCardProps).id}
            onPress={() => {
              navigation.navigate("postDetails", { postId: item.id });
            }}
            onMenuPress={() => {
              setSelectedPostforRepost(item.id);
              refRBSheet.current?.open();
            }}
          />
        );
      };

      return (
        <View>
          <FlatList
            data={mergedData}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              "id" in item ? item.id : `special-${index}`
            }
            ListEmptyComponent={() => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <CustomText>No more Posts.</CustomText>
              </View>
            )}
          />
        </View>
      );
    }, [dummyPosts]);
  };

  const handleRepost = () => {};
  const handleRepostWithYourTake = () => {
    refRBSheet.current?.close();
    if (selectedPostforRepost) {
      navigation.navigate("createPost", {
        isFromRepost: true,
        repostId: selectedPostforRepost,
      });
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.safeAreaCont}
      >
        {renderHeader()}
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
          {renderPosts()}
          {/* {renderSuggestedEvents()}
          {renderRefrBanner()}
          {renderPeopleYouMightKnow()} */}
        </ScrollView>
        <MainMenuModal />
        <HomeScreenPostOption
          ref={refRBSheet}
          handleRepost={handleRepost}
          handleRepostWithYourTake={handleRepostWithYourTake}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  safeAreaCont: {
    flex: 1,
    paddingVertical: verticalScale(16),
    gap: verticalScale(20),
  },
  scrollContainer: {
    paddingTop: verticalScale(20),
    gap: verticalScale(20),
  },
});
