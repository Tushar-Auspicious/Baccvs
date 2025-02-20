import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import React, { FC } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomButton from "../../Components/Buttons/CustomButton";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { EventDetailScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { convertStringToDate, getRandomColor } from "../../Utilities/Helpers";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import styles from "./styles";

dayjs.extend(customParseFormat);

const TagsData = [
  { key: "Progressive", title: "Progressive" },
  { key: "DeepHouse", title: "Deep House" },
  { key: "Techno", title: "Techno" },
  // Add more items as needed
];

const EventDetails: FC<EventDetailScreenProps> = ({ navigation, route }) => {
  const { isFromCreateEvent } = route.params;
  const { data } = route.params;

  const insets = useSafeAreaInsets();

  const renderBasicDetails = () => {
    return (
      <View style={styles.basicDetails}>
        <CustomText fontSize={20} fontFamily="bold">
          {data?.eventDetails.eventTitle}
        </CustomText>

        <View style={styles.venue}>
          <CustomIcon Icon={ICONS.MapPinIcon} height={12} width={12} />
          <CustomText fontSize={12}>{data?.eventDetails.eventVenue}</CustomText>
        </View>
        <View style={styles.dateTimeWrapper}>
          <View style={styles.date}>
            <CustomIcon Icon={ICONS.CalendarIcon} height={12} width={12} />
            <CustomText fontSize={12}>
              {dayjs(convertStringToDate(data?.eventDetails.eventDate)).format(
                "dddd, MMMM D, YYYY"
              )}
            </CustomText>
          </View>
          <View style={styles.time}>
            <CustomIcon Icon={ICONS.ClockIcon} height={12} width={12} />
            <CustomText
              fontSize={12}
            >{`${data?.eventDetails.eventStartTime} - ${data?.eventDetails.eventEndTime}`}</CustomText>
          </View>
        </View>
      </View>
    );
  };

  const renderEventTagList = () => {
    const renderItem = ({ item }: any) => (
      <View style={[styles.tagItem, { backgroundColor: getRandomColor() }]}>
        <CustomText fontFamily="medium" fontSize={12}>
          {item.title}
        </CustomText>
      </View>
    );

    return (
      <FlatList
        data={TagsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const renderCoverImage = () => {
    return (
      <ImageBackground
        source={{ uri: data?.coverPhoto.uri }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <SafeAreaView style={styles.safeAreaCont}>
            {isFromCreateEvent && (
              <LinearGradient
                colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.5)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.previewTag}
              >
                <View style={styles.previewTagContent}>
                  <CustomText fontFamily="medium" fontSize={10}>
                    Preview Event
                  </CustomText>
                </View>
              </LinearGradient>
            )}

            <LinearGradient
              colors={["rgba(255,255,255,0.2)", "rgba(255,255,255,0.5)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.backButtonGradient,
                { top: insets.top + verticalScale(10) },
              ]}
            >
              <View style={styles.backButtonContent}>
                <CustomIcon
                  onPress={() => navigation.goBack()}
                  Icon={ICONS.backArrow}
                  height={20}
                  width={20}
                />
              </View>
            </LinearGradient>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    );
  };

  const renderAboutSection = () => {
    return (
      <View style={styles.aboutSection}>
        <CustomText fontFamily="medium">About this event</CustomText>
        <CustomText fontSize={12} color={COLORS.greyMedium}>
          {data?.eventDetails.eventDesc}
        </CustomText>
      </View>
    );
  };

  const renderTicketection = () => {
    return (
      <View style={styles.ticketSection}>
        <CustomText fontFamily="medium">Tickets</CustomText>
        <FlatList
          data={data?.eventTickets}
          contentContainerStyle={styles.ticketList}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.ticketItem}>
                <View style={styles.ticketInfo}>
                  <View style={styles.ticketNameContainer}>
                    <CustomText fontFamily="bold">{item.ticketName}</CustomText>
                    <CustomText
                      fontFamily="medium"
                      fontSize={12}
                      color={COLORS.greyMedium}
                    >
                      {item.ticketQuantity} available
                    </CustomText>
                  </View>
                  <CustomText fontFamily="bold">
                    $ {item.ticketPrice}
                  </CustomText>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  const renderAddedPeople = () => {
    return (
      <View style={styles.addedPeopleSection}>
        <CustomText fontFamily="medium">People added</CustomText>
        <View style={styles.peopleContainer}>
          {data?.addedPeoples.map((item, index) => (
            <Image
              key={index}
              source={{ uri: item.avatar }}
              style={[
                styles.avatar,
                {
                  position: "absolute",
                  right: index * horizontalScale(15),
                  zIndex: data.addedPeoples.length - index,
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  };

  const renderCoHosts = () => {
    return (
      <View style={styles.coHostContainer}>
        <CustomText fontFamily="medium" style={styles.coHostTitle}>
          Co-host
        </CustomText>
        <FlatList
          data={data?.addedPeoples}
          horizontal
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.coHostItem}>
              <Image style={styles.coHostImage} source={{ uri: item.avatar }} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderLineUps = () => {
    return (
      <View style={styles.coHostContainer}>
        <CustomText fontFamily="medium" style={styles.coHostTitle}>
          Line up
        </CustomText>
        <FlatList
          data={data?.addedPeoples}
          horizontal
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.coHostItem}>
              <Image style={styles.coHostImage} source={{ uri: item.avatar }} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderVideos = () => {
    return (
      <View style={styles.coHostContainer}>
        <CustomText fontFamily="medium" style={styles.coHostTitle}>
          Videos
        </CustomText>
        <FlatList
          data={data?.eventVideos}
          horizontal
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.coHostItem}>
              <Image
                style={styles.coHostImage}
                source={{ uri: data?.eventVideos[index].thumbnail }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  const renderBottomButtons = () => {
    const handleCreateEvent = () => {
      if (isFromCreateEvent) {
        navigation.reset({
          index: 0,
          routes: [{ name: "tabs", params: { screen: "homeTab" } }],
        });
      }
    };

    const handleEditEvent = () => {
      if (isFromCreateEvent) {
        navigation.goBack();
      }
    };

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: horizontalScale(10),
        }}
      >
        <CustomButton
          title="Edit"
          onPress={handleEditEvent}
          backgroundColor={COLORS.whitePink}
          textColor={COLORS.mediuumPink}
          style={{ flex: 1 }}
        />
        <CustomButton
          title="Create Event"
          onPress={handleCreateEvent}
          style={{ flex: 1 }}
        />
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {renderCoverImage()}
      <View
        style={[
          styles.content,
          { paddingBottom: insets.bottom + verticalScale(20) },
        ]}
      >
        {renderBasicDetails()}
        {renderEventTagList()}
        {renderAboutSection()}
        {renderTicketection()}
        {renderAddedPeople()}
        {renderCoHosts()}
        {renderLineUps()}
        {renderVideos()}
        {renderBottomButtons()}
      </View>
    </ScrollView>
  );
};

export default EventDetails;
