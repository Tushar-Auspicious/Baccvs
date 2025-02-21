import React, { FC, useState } from "react";
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
import EventListCard from "../../Components/Cards/EventListCard";
import CardSwiper from "../../Components/CardSwiper";
import { data } from "../../Components/CardSwiper/data";
import CustomIcon from "../../Components/CustomIcon";
import CustomInput from "../../Components/CustomInput";
import { CustomText } from "../../Components/CustomText";
import {
  categoriesData,
  categoriesDataForMap,
  CategoryType,
} from "../../Seeds/SearchHomeData";
import { SearchHomeScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";
import dummyEvents from "../../Seeds/EventData";
import { getDistance } from "../../Utilities/Helpers";
import { USER_LOCATION } from "../Home";

const SearchHome: FC<SearchHomeScreenProps> = ({ navigation, route }) => {
  const { isFromMap } = route.params;
  const insets = useSafeAreaInsets();
  const [searchedTerm, setSearchedTerm] = useState("");
  const [showRecents, setShowRecents] = useState(true);

  const renderCategoryList = () => {
    const CategoryItem = ({ item }: { item: CategoryType }) => {
      return (
        <TouchableOpacity style={styles.categoryButton}>
          <CustomIcon Icon={item.icon} height={15} width={16} />
          <CustomText fontFamily="medium" fontSize={14}>
            {item.name}
          </CustomText>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={isFromMap ? categoriesDataForMap : categoriesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryItem item={item} />}
          numColumns={3} // Adjust based on layout needs
          columnWrapperStyle={styles.row}
        />
      </View>
    );
  };

  const renderRecentSearches = () => {
    return (
      <View>
        <View style={styles.recentSearchHeader}>
          <CustomText>Recent</CustomText>
          <CustomIcon
            onPress={() => setShowRecents(false)}
            Icon={ICONS.WhiteCrossIcon}
            height={20}
            width={20}
          />
        </View>

        {[
          "Singles events near me",
          "Spring festivals",
          "Live music events",
          "James",
          "Upcoming karaoke nights",
          "Lesie",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            style={styles.recentSearchItem}
          >
            <CustomIcon
              Icon={ICONS.ClockTransParentIcon}
              height={14}
              width={14}
            />
            <CustomText fontSize={14}>{item}</CustomText>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderEventsNearYou = () => {
    return (
      <View style={styles.eventListContainer}>
        <View style={styles.listHeaderCont}>
          <CustomText fontFamily="medium">Event near you</CustomText>
        </View>
        <FlatList
          data={dummyEvents}
          horizontal
          contentContainerStyle={styles.eventListContentContainer}
          renderItem={({ item, index }) => {
            let distance = getDistance(
              USER_LOCATION.latitude,
              USER_LOCATION.longitude,
              item.latitude,
              item.longitude
            ).toFixed(0);
            return (
              <EventListCard
                eventData={item}
                onPress={() => {}}
                distance={distance}
              />
            );
          }}
        />
      </View>
    );
  };

  const renderPeopleNearYou = () => {
    return (
      <View>
        <View style={styles.listHeaderCont}>
          <CustomText fontFamily="medium">People near you</CustomText>
        </View>
        <CardSwiper data={data} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={styles.safeAreaCont}
      >
        <CustomInput
          onChangeText={setSearchedTerm}
          placeholder="Search baccvs"
          value={searchedTerm}
          isBackArrow
          onBackPress={() => navigation.goBack()}
          baseStyle={styles.customInputBase}
        />
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { paddingBottom: verticalScale(80) + insets.bottom },
          ]}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          {renderCategoryList()}
          {showRecents && renderRecentSearches()}
          {renderEventsNearYou()}
          {renderPeopleNearYou()}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SearchHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
  },
  safeAreaCont: {
    flex: 1,
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
    gap: verticalScale(20),
  },
  scrollContainer: {
    gap: verticalScale(20),
  },
  row: {
    justifyContent: "flex-start",
    marginBottom: verticalScale(6),
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(12),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.darkPink,
    marginHorizontal: horizontalScale(4),
    gap: horizontalScale(5),
  },
  recentSearchHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
    paddingVertical: verticalScale(8),
  },
  eventListContainer: {
    gap: verticalScale(5),
  },
  eventListContentContainer: {
    gap: horizontalScale(20),
  },
  listHeaderCont: {
    width: wp(90),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  customInputBase: {
    borderRadius: 100,
  },
});
