import React, { Dispatch, SetStateAction, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ICONS from "../../../Assets/Icons";
import CustomButton from "../../../Components/Buttons/CustomButton";
import CustomIcon from "../../../Components/CustomIcon";
import { CustomText } from "../../../Components/CustomText";
import AddEventTicket from "../../../Components/Modals/AddEventTicket";
import { TicketData } from "../../../Typings/type";
import COLORS from "../../../Utilities/Colors";
import { horizontalScale, verticalScale } from "../../../Utilities/Metrics";

type EventTicketingProps = {
  acitveTab: boolean;
  setActiveTab: Dispatch<SetStateAction<boolean>>;
  tickets: TicketData[];
  setTickets: Dispatch<SetStateAction<TicketData[]>>;
  handleNext: () => void;
};

const EventTicketing: React.FC<EventTicketingProps> = ({
  acitveTab,
  setActiveTab,
  tickets,
  setTickets,
  handleNext,
}) => {
  const [isAddTicketModal, setIsAddTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<TicketData | null>(null);

  const renderSavedTicketList = () => {
    const handleEditTicket = (ticket: TicketData) => {
      setSelectedTicket(ticket);
      setIsAddTicketModal(true);
    };

    const handleDeleteTicket = (ticketID: string) => {
      setTickets((prev) =>
        prev.filter((ticket) => ticket.ticketID !== ticketID)
      );
    };

    return (
      <View style={styles.savedTicketListContainer}>
        <FlatList
          data={tickets}
          renderItem={({ item, index }) => {
            return (
              <View
                key={item.ticketName + index.toString()}
                style={styles.ticketItem}
              >
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
                <View style={styles.ticketActions}>
                  {tickets.length > 1 && (
                    <TouchableOpacity
                      onPress={() => handleDeleteTicket(item.ticketID)}
                      activeOpacity={0.7}
                    >
                      <CustomIcon
                        Icon={ICONS.DeleteIcon}
                        height={36}
                        width={36}
                      />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    onPress={() => handleEditTicket(item)}
                    activeOpacity={0.7}
                  >
                    <CustomIcon Icon={ICONS.EditIcon} height={36} width={36} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <CustomText fontFamily="bold" fontSize={20}>
          Event ticketing
        </CustomText>

        <View style={styles.buttonWrapper}>
          <CustomText fontFamily="medium" fontSize={14}>
            Is this a free event?
          </CustomText>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setActiveTab(true)}
              style={[styles.button, acitveTab && styles.selectedButton]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                Yes
              </CustomText>
            </Pressable>
            <Pressable
              onPress={() => setActiveTab(false)}
              style={[styles.button, !acitveTab && styles.selectedButton]}
            >
              <CustomText fontFamily="bold" fontSize={14}>
                No
              </CustomText>
            </Pressable>
          </View>
          {!acitveTab && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setIsAddTicketModal(true)}
            >
              <CustomText color={COLORS.mediuumPink} fontFamily="bold">
                Add a ticket
              </CustomText>
            </TouchableOpacity>
          )}
          {!acitveTab && tickets.length > 0 && renderSavedTicketList()}
        </View>
        <CustomButton title="Next" isFullWidth onPress={handleNext} />
      </View>
      <AddEventTicket
        isModalVisible={isAddTicketModal}
        setIsModalVisible={setIsAddTicketModal}
        ticketData={tickets}
        setTicketData={setTickets}
        editTicket={selectedTicket}
        setEditTicket={setSelectedTicket}
      />
    </View>
  );
};

export default EventTicketing;

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
  savedTicketListContainer: {
    marginVertical: verticalScale(10),
    flex: 1,
  },
  ticketItem: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: COLORS.darkVoilet,
    borderRadius: 10,
  },
  ticketInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ticketNameContainer: {
    gap: verticalScale(6),
  },
  ticketActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: horizontalScale(10),
    marginTop: verticalScale(10), // Adjust this value to space out actions from the ticket info
  },
});
