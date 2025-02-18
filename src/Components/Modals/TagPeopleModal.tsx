import React, { Dispatch, FC, SetStateAction, useRef, useState } from "react";
import {
    Animated,
    FlatList,
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ICONS from "../../Assets/Icons";
import { setIsTagPeopleModalVisible } from "../../Redux/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import TagPeople from "../../Seeds/TagPeople";
import COLORS from "../../Utilities/Colors";
import {
    horizontalScale,
    verticalScale
} from "../../Utilities/Metrics";
import CustomIcon from "../CustomIcon";
import CustomInput from "../CustomInput";
import { CustomText } from "../CustomText";

type TagPeopleModalProps = {
  selectedItems: any[];
  setSelectedItems: Dispatch<SetStateAction<any[]>>;
};

const TagPeopleModal: FC<TagPeopleModalProps> = ({
  selectedItems,
  setSelectedItems,
}) => {
  const dispatch = useAppDispatch();
  const { isTagPeopleModalVisible } = useAppSelector((state) => state.modals);
  const insets = useSafeAreaInsets();

  const [searchText, setSearchText] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputAnim = useRef(new Animated.Value(0)).current;

  const handleDone = () => dispatch(setIsTagPeopleModalVisible(false));

  const toggleSelection = (item: any) => {
    setSelectedItems((prevSelected) => {
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
      isVisible={isTagPeopleModalVisible}
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
          <View style={styles.headerLeft}>
            <CustomText onPress={handleDone} fontFamily="bold" fontSize={14}>
              Done
            </CustomText>
          </View>

          <CustomText fontFamily="medium">Tag people</CustomText>

          <TouchableOpacity onPress={toggleSearch}>
            <CustomIcon Icon={ICONS.SearchIconWhite} height={20} width={20} />
          </TouchableOpacity>
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
        <View style={{ flex: 1 }}>
          <FlatList
            data={filteredPeople}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.flatListContent}
            renderItem={({ item }) => {
              const isSelected = selectedItems.some(
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
                    style={{ height: 32, width: 32, borderRadius: 100 }}
                    resizeMode="cover"
                  />
                  <CustomText style={{ flex: 1 }} fontFamily="medium">
                    {`${item.name}, ${item.age}`}
                  </CustomText>
                  <View style={styles.selectionIndicator}>
                    {isSelected && (
                      <CustomIcon
                        Icon={ICONS.FillTickIcon}
                        width={16}
                        height={16}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default TagPeopleModal;

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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(20),
  },
  searchContainer: {
    overflow: "hidden",
    marginBottom: verticalScale(10),
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
  selectionIndicator: {},
});
