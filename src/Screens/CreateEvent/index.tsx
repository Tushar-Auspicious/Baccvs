import React, { FC, useMemo, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import CustomIcon from "../../Components/CustomIcon";
import { CustomText } from "../../Components/CustomText";
import { FilterCategory } from "../../Seeds/EventCreation";
import { CreateEventScreenProps } from "../../Typings/route";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale, wp } from "../../Utilities/Metrics";
import BasicEventDetails from "./Steps/BasicEventDetails";
import EventAssets from "./Steps/EventAssets";
import EventPreference from "./Steps/EventPreference";
import EventTicketing from "./Steps/EventTicketing";
import EventType from "./Steps/EventType";

const CreateEvent: FC<CreateEventScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const steps = new Array(5).fill(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  const [eventDetails, setEventDetails] = useState({
    eventTitle: "",
    eventDesc: "",
    eventDate: null,
    eventStartTime: null,
    eventEndTime: null,
    eventVenue: "",
    eventCapacity: null,
  });

  const [eventPrefrences, setEventPreferences] = useState<
    Record<FilterCategory, string[]>
  >({
    musicTypes: [],
    eventTypes: [],
    venueTypes: [],
  });

  const [activeTab, setActiveTab] = useState<"public" | "private">("public");
  const [addedPeoples, setAddedPeoples] = useState<any>([]);

  const [isFreeEvent, setIsFreeEvent] = useState(false);

  // Function to update state dynamically
  const updateEventDetails = (key: string, value: any) => {
    setEventDetails((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate("eventDetail", { isFromCreateEvent: true });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const renderCurrentStep = useMemo(() => {
    switch (currentIndex) {
      case 1:
        return (
          <BasicEventDetails
            eventDetails={eventDetails}
            updateEventDetails={updateEventDetails}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <EventPreference
            selectedItems={eventPrefrences}
            setSelectedItems={setEventPreferences}
            handleNext={handleNext}
          />
        );
      case 3:
        return (
          <EventType
            acitveTab={activeTab}
            setActiveTab={setActiveTab}
            addedPeoples={addedPeoples}
            setAddedPeoples={setAddedPeoples}
            handleNext={handleNext}
          />
        );
      case 4:
        return (
          <EventTicketing
            handleNext={handleNext}
            acitveTab={isFreeEvent}
            setActiveTab={setIsFreeEvent}
          />
        );
      case 5:
        return <EventAssets />;
    }
  }, [
    currentIndex,
    eventDetails,
    eventPrefrences,
    activeTab,
    addedPeoples,
    isFreeEvent,
  ]);

  const renderStepper = useMemo(() => {
    return (
      <View style={styles.stepCont}>
        {steps.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.stepscount,
                {
                  backgroundColor:
                    index + 1 <= currentIndex
                      ? COLORS.primaryPink
                      : COLORS.voilet,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }, [currentIndex, steps]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop:
            Platform.OS === "android"
              ? verticalScale(16)
              : insets.top + verticalScale(0),
          paddingBottom:
            Platform.OS === "android"
              ? verticalScale(16)
              : insets.bottom + verticalScale(16),
        },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <CustomIcon
          onPress={handleBack}
          Icon={ICONS.backArrow}
          height={20}
          width={20}
        />
        {renderStepper}

        <CustomText
          fontSize={12}
        >{`Step ${currentIndex}/${steps.length}`}</CustomText>
      </View>
      {renderCurrentStep}
    </View>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackground,
    paddingHorizontal: horizontalScale(16),
    gap: verticalScale(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepCont: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: horizontalScale(2),
  },

  stepscount: {
    width: wp(8),
    height: 4,
    borderRadius: 100,
  },
});
