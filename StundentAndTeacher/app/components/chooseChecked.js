import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../assets/styles/App.style";
import { AntDesign } from "@expo/vector-icons";
import { font1216, font1820 } from "../../assets/styles/fontSize";
import { white } from "../../assets/styles/colors";
const LectureChoose = ({ label = "Tahsin Akyol" }) => {
  const [clickec, setClicked] = useState(false);
  return (
    <View style={styles.cardCheckedNews}>
      <View style={{ flex: 1, paddingRight: 10 }}>
        <Text style={{ fontWeight: "400", fontSize: font1216 }}>{label}</Text>
      </View>
      <TouchableOpacity
        onPress={() => setClicked(!clickec)}
        style={clickec == true ? styles.activeClicked : styles.pasiveClicked}
      >
        {clickec == true ? (
          <>
            <AntDesign name="check" size={font1820} color={white} />
          </>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default LectureChoose;
