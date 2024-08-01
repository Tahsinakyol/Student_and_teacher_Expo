import React from "react";
import { View, Text } from "react-native";
import styles from "../../assets/styles/App.style";
import { Select } from "native-base";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { black, iconColor } from "../../assets/styles/colors";
import { font131517 } from "../../assets/styles/fontSize";
const SelectComp = (props) => {
  let label = props.label;
  let children = props.children;
  let holder = props.holder;
  let onValueChanges = props.onValueChanges;
  const [service, setService] = useState("");
  return (
    <View style={styles.addLectureTextAndInput}>
      <Text style={styles.nameInputTopText}>{label}</Text>
      <View style={styles.selectCardChoose}>
        <Select
          fontSize={16}
          textAlignVertical={"center"}
          borderWidth={0}
          placeholderTextColor={iconColor}
          _actionSheet={{
            useRNModal: true,
          }}
          style={[
            {
              width: "100%",
              color: black,
              fontSize: font131517,
              height: "100%",
            },
          ]}
          selectedValue={service}
          minWidth="100%"
          accessibilityLabel={holder}
          placeholder={holder}
          dropdownIcon={
            <FontAwesome
              name="chevron-down"
              color={black}
              style={{
                marginRight: 15,
              }}
            />
          }
          _selectedItem={{
            bg: "teal.600",
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          {children}
        </Select>
      </View>
    </View>
  );
};

export default SelectComp;
