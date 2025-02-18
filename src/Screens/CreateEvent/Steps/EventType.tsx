import React, { Dispatch, FC, SetStateAction, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ICONS from "../../../Assets/Icons";
import CustomButton from "../../../Components/Buttons/CustomButton";
import CustomIcon from "../../../Components/CustomIcon";
import { CustomText } from "../../../Components/CustomText";
import AddPeopleInEventModal from "../../../Components/Modals/AddPeopleInEventModal";
import COLORS from "../../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";

type EventTypeProps = {
  acitveTab: "public" | "private";
  setActiveTab: Dispatch<SetStateAction<"public" | "private">>;
  addedPeoples: any;
  setAddedPeoples: Dispatch<SetStateAction<any>>;
  handleNext: () => void;
};

const EventType: FC<EventTypeProps> = ({
  acitveTab,
  setActiveTab,
  addedPeoples,
  setAddedPeoples,
  handleNext,
}) => {
  const [isAddPeopleModal, setIsAddPeopleModal] = useState(false);

  // Function to remove a person from the addedPeoples array
  const removePerson = (id: string) => {
    setAddedPeoples((prevPeoples: any[]) =>
      prevPeoples.filter((person: { id: string }) => person.id !== id)
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CustomText fontFamily="bold" fontSize={20}>
          Event type
        </CustomText>

        <View style={styles.infoContainer}>
          <CustomText fontSize={12} style={styles.infoText}>
            Public will make your location visible, to attract maximum people.
          </CustomText>
          <CustomText fontSize={12} style={styles.infoText}>
            Private will keep your location safe, and it will need your approval
            for every person that wants to join
          </CustomText>
        </View>

        <View style={styles.buttonWrapper}>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setActiveTab("public")}
              style={[
                styles.button,
                acitveTab === "public" && styles.selectedButton,
              ]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                Public
              </CustomText>
            </Pressable>
            <Pressable
              onPress={() => setActiveTab("private")}
              style={[
                styles.button,
                acitveTab === "private" && styles.selectedButton,
              ]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                Private
              </CustomText>
            </Pressable>
          </View>

          {acitveTab === "private" && (
            <View style={styles.privateTabWrapper}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsAddPeopleModal(!isAddPeopleModal)}
              >
                <CustomText color={COLORS.mediuumPink} fontFamily="bold">
                  Add People
                </CustomText>
              </TouchableOpacity>
              <FlatList
                data={addedPeoples}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.listCont}
                    >
                      <Image
                        source={{ uri: item.avatar }}
                        style={styles.avatar}
                        resizeMode="cover"
                      />
                      <CustomText style={styles.personName} fontFamily="medium">
                        {`${item.name}, ${item.age}`}
                      </CustomText>
                      <TouchableOpacity onPress={() => removePerson(item.id)}>
                        <CustomIcon
                          Icon={ICONS.WhiteCrossIcon}
                          width={20}
                          height={20}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          )}
        </View>
        <CustomButton title="Next" isFullWidth onPress={handleNext} />
      </View>
      <AddPeopleInEventModal
        isModalVisible={isAddPeopleModal}
        setIsModalVisible={setIsAddPeopleModal}
        addedPeoples={addedPeoples}
        setAddedPeoples={setAddedPeoples}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    width: "100%",
    paddingVertical: verticalScale(10),
    gap: verticalScale(20),
    flex: 1,
  },
  infoContainer: {
    backgroundColor: COLORS.orange,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: 10,
  },
  infoText: {
    lineHeight: 16,
  },
  buttonWrapper: {
    flex: 1,
    gap: verticalScale(10),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  button: {
    flex: 1,
    paddingVertical: verticalScale(16),
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 10,
  },
  selectedButton: {
    borderColor: COLORS.mediuumPink,
  },
  privateTabWrapper: {
    gap: verticalScale(20),
    flex: 1,
  },
  flatListContent: {
    rowGap: verticalScale(20),
  },
  listCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: horizontalScale(15),
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  personName: {
    flex: 1,
  },
});

export default EventType;
