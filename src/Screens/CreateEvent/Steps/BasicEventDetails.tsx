import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../../Components/Buttons/CustomButton";
import CustomInput from "../../../Components/CustomInput";
import { CustomText } from "../../../Components/CustomText";
import { KeyboardAvoidingContainer } from "../../../Components/KeyboardAvoidingComponent";
import { horizontalScale, hp, verticalScale } from "../../../Utilities/Metrics";

type BasicEventDetailProps = {
  eventDetails: {
    eventTitle: string;
    eventDesc: string;
    eventDate: any;
    eventStartTime: any;
    eventEndTime: any;
    eventVenue: string;
    eventCapacity: any;
  };
  updateEventDetails: (key: string, value: any) => void;
  handleNext: () => void;
};

const BasicEventDetails: FC<BasicEventDetailProps> = ({
  eventDetails,
  updateEventDetails,
  handleNext,
}) => {
  return (
    <KeyboardAvoidingContainer>
      <View
        style={{
          width: "100%",
          paddingVertical: verticalScale(10),
          gap: verticalScale(20),
        }}
      >
        <CustomText fontFamily="bold" fontSize={20}>
          Create an event
        </CustomText>

        <View
          style={{
            gap: verticalScale(15),
          }}
        >
          <CustomInput
            label="Event title"
            value={eventDetails.eventTitle}
            onChangeText={(text) => updateEventDetails("eventTitle", text)}
            placeholder="What’s the title of the event?"
          />
          <CustomInput
            label="About event (Optional)"
            value={eventDetails.eventDesc}
            onChangeText={(text) => updateEventDetails("eventDesc", text)}
            placeholder="Write a short description about this event"
            multiline
            type="textArea"
            textAlignVertical="top"
            inputStyle={{
              paddingVertical: verticalScale(10),
              minHeight: hp(20),
            }}
          />
          <CustomInput
            label="Date"
            value={eventDetails.eventDate}
            onChangeText={(date) => updateEventDetails("eventDate", date)}
            placeholder="When is the event?"
            type="date"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              gap: horizontalScale(10),
            }}
          >
            <CustomInput
              label="Start time"
              value={eventDetails.eventStartTime}
              onChangeText={(time) =>
                updateEventDetails("eventStartTime", time)
              }
              placeholder="00 : 00"
              type="time"
              style={{ flex: 1 }}
            />
            <CustomInput
              label="End time"
              value={eventDetails.eventEndTime}
              onChangeText={(time) => updateEventDetails("eventEndTime", time)}
              placeholder="00 : 00"
              type="time"
              style={{ flex: 1 }}
            />
          </View>
          <CustomInput
            label="Venue"
            value={eventDetails.eventVenue}
            onChangeText={(text) => updateEventDetails("eventVenue", text)}
            placeholder="Where is the event happening?"
          />
          <CustomInput
            label="Capacity"
            value={eventDetails.eventCapacity}
            onChangeText={(text) =>
              updateEventDetails("eventCapacity", text ? parseInt(text, 10) : 0)
            }
            placeholder="What’s the capacity of the venue?"
            keyboardType="numeric"
          />
        </View>
        <CustomButton title="Next" isFullWidth onPress={handleNext} />
      </View>
    </KeyboardAvoidingContainer>
  );
};

export default BasicEventDetails;

const styles = StyleSheet.create({});
