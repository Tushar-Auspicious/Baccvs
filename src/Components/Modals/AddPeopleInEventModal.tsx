import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import TagPeople from "../../Seeds/TagPeople";
import COLORS from "../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../Utilities/Metrics";
import CustomButton from "../Buttons/CustomButton";
import CustomIcon from "../CustomIcon";
import CustomInput from "../CustomInput";
import { CustomText } from "../CustomText";

type TagPeopleModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  addedPeoples: any[];
  setAddedPeoples: Dispatch<SetStateAction<any[]>>;
};

const AddPeopleInEventModal: FC<TagPeopleModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  addedPeoples,
  setAddedPeoples,
}) => {
  const insets = useSafeAreaInsets();

  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputAnim = useRef(new Animated.Value(0)).current;

  const handleCloseModal = () => setIsModalVisible(false);

  const toggleSelection = (item: any) => {
    setAddedPeoples((prevSelected) => {
      const isSelected = prevSelected.some(
        (selected) => selected.id === item.id
      );
      if (isSelected) {
        return prevSelected.filter((selected) => selected.id !== item.id);
      } else {
        return [...prevSelected, item];
      }
    });
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    Animated.timing(searchInputAnim, {
      toValue: isSearchVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const filteredPeople = TagPeople.filter((person) =>
    person.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Modal
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      animationIn="slideInUp"
      onBackdropPress={() => {}}
      avoidKeyboard={true}
      style={styles.mainCont}
      isVisible={isModalVisible}
      backdropOpacity={0.8}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop:
              Platform.OS === "android"
                ? verticalScale(16)
                : insets.top + verticalScale(16),
            paddingBottom:
              Platform.OS === "android"
                ? verticalScale(16)
                : insets.bottom + verticalScale(16),
          },
        ]}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleCloseModal}>
            <CustomIcon Icon={ICONS.WhiteCrossIcon} height={20} width={20} />
          </TouchableOpacity>
          <CustomText fontFamily="medium">Add people</CustomText>

          <TouchableOpacity onPress={toggleSearch}>
            <CustomIcon Icon={ICONS.SearchIconWhite} height={20} width={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <CustomText fontSize={12} style={{ lineHeight: 16 }}>
            A notification will be sent to selected people. They have to accept
            or refuse. If they accept, they will appear as participants in the
            event and will receive a notification of their approval. If not,
            you’ll be notified about it too
          </CustomText>
        </View>

        {/* Animated Search Input */}
        <Animated.View
          style={[
            styles.searchContainer,
            {
              height: searchInputAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 56],
              }),
              opacity: searchInputAnim,
            },
          ]}
        >
          <CustomInput
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </Animated.View>

        {/* People List */}
        <View style={{ flex: 1, gap: verticalScale(10) }}>
          <FlatList
            data={filteredPeople}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContent}
            renderItem={({ item }) => {
              const isSelected = addedPeoples.some(
                (selected) => selected.id === item.id
              );

              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.listCont}
                  onPress={() => toggleSelection(item)}
                >
                  <Image
                    source={{ uri: item.avatar }}
                    style={{ height: 40, width: 40, borderRadius: 100 }}
                    resizeMode="cover"
                  />
                  <CustomText style={{ flex: 1 }} fontFamily="medium">
                    {`${item.name}, ${item.age}`}
                  </CustomText>
                  <View>
                    {isSelected ? (
                      <CustomIcon
                        Icon={ICONS.FillTickIcon}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <View
                        style={{
                          height: 15,
                          width: 15,
                          borderColor: COLORS.white,
                          borderWidth: 2,
                          borderRadius: 5,
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <CustomButton
            title="Add"
            onPress={handleCloseModal}
            isFullWidth
            disabled={addedPeoples.length === 0}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddPeopleInEventModal;

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: COLORS.appBackground,
  },
  container: {
    flex: 1,
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    overflow: "hidden",
  },
  searchInput: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: horizontalScale(10),
    color: COLORS.black,
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
  infoContainer: {
    backgroundColor: COLORS.orange,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    borderRadius: 10,
  },
});
