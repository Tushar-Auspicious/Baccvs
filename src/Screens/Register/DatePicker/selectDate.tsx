import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import COLORS from "../../../Utilities/Colors";

const SelectDate = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        buttonColor={COLORS.white}
        theme="dark"
        mode="date"
      />
    </View>
  );
};

export default SelectDate;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
