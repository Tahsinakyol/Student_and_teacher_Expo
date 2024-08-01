import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../assets/styles/App.style";
import { AntDesign } from "@expo/vector-icons";
import { black } from "@/assets/styles/colors";
import { font131517 } from "@/assets/styles/fontSize";
interface topComp {
  detail: string;
}
const HomeworkComp = ({ detail = "Henüz Birşey Yazılmadi" }: topComp) => {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();

  return (
    <View style={styles.pdfCardMain}>
      <TouchableOpacity style={styles.downloddPdfButton}>
        <AntDesign name="download" size={font131517} color={black} />
      </TouchableOpacity>
      <Image
        style={styles.iamgesPdgCenterState}
        source={require("../../assets/images/system/pdf.png")}
        resizeMode="contain"
      />
      <View style={{ width: "100%", flex: 1 }}>
        <Text
          style={styles.textDetailExpPdf}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {detail}
        </Text>
      </View>
    </View>
  );
};

export default HomeworkComp;
