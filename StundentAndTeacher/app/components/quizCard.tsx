import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../assets/styles/App.style";
interface topComp {
  detail: string;
  goPage: any;
}
const QuizCard = ({ detail = "Henüz Birşey Yazılmadi", goPage }: topComp) => {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();

  return (
    <TouchableOpacity style={styles.pdfCardMain} onPress={goPage}>
      <Image
        style={styles.iamgesPdgCenterState}
        source={require("../../assets/images/system/questionIm.png")}
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
    </TouchableOpacity>
  );
};

export default QuizCard;
