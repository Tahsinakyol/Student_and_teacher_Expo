import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { AntDesign } from "@expo/vector-icons";
import { black, gray, orange } from "@/assets/styles/colors";
import { font2024 } from "@/assets/styles/fontSize";
import { StatusBar } from "expo-status-bar";
export default function DetailQuiz() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
    clickName: string;
    question: string;
  }
  const data: Data[] = [
    {
      id: 1,
      clickName: "A",
      question: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 2,
      clickName: "B",
      question: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 3,
      clickName: "C",
      question: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 4,
      clickName: "D",
      question: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      id: 5,
      clickName: "E",
      question: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  const [buttonClicked, setButtonClicked] = useState(1);
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <TouchableOpacity
        style={
          buttonClicked != item.id
            ? styles.orangeButton
            : [styles.orangeButton, { backgroundColor: orange }]
        }
        onPress={() => setButtonClicked(item.id)}
      >
        <StatusBar style="dark" />
        <View
          style={
            buttonClicked != item.id
              ? styles.pasiveButtoQuestions
              : [styles.pasiveButtoQuestions, { backgroundColor: "#904700" }]
          }
        >
          <Text style={styles.ansversWhite}>{item.clickName}</Text>
        </View>
        <Text
          style={
            buttonClicked != item.id
              ? styles.pasieButtonTem
              : [styles.pasieButtonTem, { color: black }]
          }
        >
          {item.question}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <TopBar goBack={true} topBarName="Quizler" rightBtn="bar" />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            padding: width * 0.03,
            gap: width * 0.03,
          }}
        >
          <Text style={styles.textDetailQuizesDetail}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Text>
          <View style={styles.generateAllQuestionDetail}>
            <TouchableOpacity style={styles.btnOrangeDetailQuizses}>
              <Text style={styles.btnOrangeDetailQuizsesText}>3 Doğru</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOrangeDetailQuizses}>
              <Text style={styles.btnOrangeDetailQuizsesText}>1 Boş</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnOrangeDetailQuizses}>
              <Text style={styles.btnOrangeDetailQuizsesText}>0 Yanlış</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.questionCardIn}>
            <View style={styles.buttonAndTextQuestionPage}>
              <TouchableOpacity style={{ padding: width * 0.03 }}>
                <AntDesign name="arrowleft" size={font2024} color={gray} />
              </TouchableOpacity>
              <Text style={styles.textCenterQuestions}>5.Soru</Text>
              <TouchableOpacity style={{ padding: width * 0.03 }}>
                <AntDesign name="arrowright" size={font2024} color={gray} />
              </TouchableOpacity>
            </View>
            <Text style={styles.textDetailQuizesDetail}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor
            </Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: 15,
                marginTop: 15,
              }}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView>
      </View>
      <Toolbar selectMenu={1} />
    </View>
  );
}
