import React, { FC, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import DatingUserCard from "../../Components/Cards/DatingUserCard";
import EventListCard from "../../Components/Cards/EventListCard";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { darkMapStyle } from "../../Configs/DarkMapConfigs";
import dummyEvents from "../../Seeds/EventData";
import TagPeople from "../../Seeds/TagPeople";
import { MapsScreenProps } from "../../Typings/route";
import { IEvents, ITagPeople } from "../../Typings/type";
import { getDistance } from "../../Utilities/Helpers";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import { USER_LOCATION } from "../Home";
import styles from "./styles";

const Maps: FC<MapsScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState("people");
  const [inittialRegion, setInittialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [region, setRegion] = useState(inittialRegion);
  const [visiblePeople, setVisiblePeople] = useState<ITagPeople[]>([]);
  const [visibleEvents, setVisibleEvents] = useState<IEvents[]>([]);

  const filterPeopleInRegion = (region: {
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
  }) => {
    const filtered = TagPeople.map((person) => {
      const isWithinRegion =
        person.latitude >= region.latitude - region.latitudeDelta / 2 &&
        person.latitude <= region.latitude + region.latitudeDelta / 2 &&
        person.longitude >= region.longitude - region.longitudeDelta / 2 &&
        person.longitude <= region.longitude + region.longitudeDelta / 2;

      let distance = getDistance(
        USER_LOCATION.latitude,
        USER_LOCATION.longitude,
        person.latitude,
        person.longitude
      ).toFixed(1);

      return isWithinRegion ? { ...person, distance } : null;
    }).filter(Boolean) as ITagPeople[];

    setVisiblePeople(filtered);
  };

  const filterEventsInRegion = (region: {
    latitude: number;
    latitudeDelta: number;
    longitude: number;
    longitudeDelta: number;
  }) => {
    const filtered = dummyEvents
      .map((person) => {
        const isWithinRegion =
          person.latitude >= region.latitude - region.latitudeDelta / 2 &&
          person.latitude <= region.latitude + region.latitudeDelta / 2 &&
          person.longitude >= region.longitude - region.longitudeDelta / 2 &&
          person.longitude <= region.longitude + region.longitudeDelta / 2;

        let distance = getDistance(
          USER_LOCATION.latitude,
          USER_LOCATION.longitude,
          person.latitude,
          person.longitude
        ).toFixed(1);

        return isWithinRegion ? { ...person, distance } : null;
      })
      .filter(Boolean) as IEvents[];

    setVisibleEvents(filtered);
  };

  const renderHeader = () => {
    return (
      <View
        style={[
          styles.headerContainer,
          {
            top: insets.top + verticalScale(Platform.OS === "android" ? 10 : 0),
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <CustomIcon Icon={ICONS.backArrow} height={24} width={24} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("searchHome", { isFromMap: true })}
          style={styles.searchButton}
        >
          <CustomIcon Icon={ICONS.SearchIcon} height={24} width={24} />
          <CustomText fontSize={14}>Search map</CustomText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBottomListContainer = () => {
    return (
      <View style={styles.bottomListContainer}>
        <View style={styles.tabsContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === "people" && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab("people")}
            >
              <CustomText fontSize={14} fontFamily="medium">
                People
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                selectedTab === "event" && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab("event")}
            >
              <CustomText fontSize={14} fontFamily="medium">
                Event
              </CustomText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <CustomIcon Icon={ICONS.filtericon} height={20} width={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {selectedTab === "people" && visiblePeople.length > 0 && (
            <FlatList
              data={visiblePeople}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: horizontalScale(10),
                paddingBottom: insets.bottom,
              }}
              renderItem={({ item }) => (
                <DatingUserCard
                  userData={item}
                  onPress={() => {}}
                  distance={item.distance}
                />
              )}
            />
          )}
          {selectedTab === "event" && (
            <FlatList
              data={visibleEvents}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: horizontalScale(10),
              }}
              renderItem={({ item }) => {
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
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={darkMapStyle}
        region={inittialRegion}
        zoomControlEnabled
        onRegionChangeComplete={(newRegion) => {
          setRegion(newRegion);
          filterPeopleInRegion(newRegion);
          filterEventsInRegion(newRegion);
        }}
      >
        {TagPeople.map((user) => (
          <Marker
            anchor={{ x: 0.5, y: 0.5 }}
            key={user.id}
            coordinate={{
              latitude: user.latitude,
              longitude: user.longitude,
            }}
          >
            <View style={styles.markerContainer}>
              <CustomIcon Icon={ICONS.MapMarkerIcon} height={25} width={25} />
              <Image source={{ uri: user.avatar }} style={styles.markerImage} />
            </View>
          </Marker>
        ))}
      </MapView>
      {renderBottomListContainer()}
    </View>
  );
};

export default Maps;
