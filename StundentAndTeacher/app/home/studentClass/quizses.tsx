import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Dimensions, FlatList, ScrollView } from "react-native";
import styles from "../../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import QuizCard from "@/app/components/quizCard";
import { StatusBar } from "expo-status-bar";
type TeacherProfileParams = {
  toolBarHead: string;
  profil: string;
};

export default function Homework() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  interface Data {
    id: number;
    detail: string;
    press: any;
  }
  const data: Data[] = [
    {
      id: 1,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
      press: () => navigation.navigate("home/studentClass/detailQuiz"),
    },
  ];
  for (let i = 1; i < 10; i++) {
    data.push({
      id: data.length + 1,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
      press: () => navigation.navigate("home/studentClass/detailQuiz"),
    });
  }
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <View style={{ width: "50%", padding: width * 0.01 }}>
        <QuizCard detail={item.detail} goPage={item.press} />
      </View>
    );
  };
  return (
    <View
      style={[
        styles.mainTopView,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="dark" />
      <TopBar goBack={true} topBarName="Quizler" rightBtn="bar" />
      <View
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            padding: width * 0.03,
            gap: width * 0.02,
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
            }}
            numColumns={2}
          />
        </ScrollView>
      </View>
      <Toolbar selectMenu={2} />
    </View>
  );
}
