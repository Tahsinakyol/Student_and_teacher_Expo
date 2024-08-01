import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import { useLocalSearchParams } from "expo-router";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useState } from "react";
import { black, orange, white } from "@/assets/styles/colors";
import { Feather } from "@expo/vector-icons";
import { font1820, font2024 } from "@/assets/styles/fontSize";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
type TeacherProfileParams = {
  profil: string;
  nameSurname: string;
  classedName: string;
};

export default function AllClass() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  const {
    profil = "another",
    nameSurname,
    classedName,
  } = useLocalSearchParams<TeacherProfileParams>();
  type newData = {
    id: number;
    className: string;
    department: string;
  };
  const [data, setData] = useState<newData[]>([
    {
      id: 1,
      className: "Sınıf 1",
      department: "Coğrafya",
    },
    {
      id: 2,
      className: "Sınıf 2",
      department: "Tarih",
    },
    {
      id: 3,
      className: "Sınıf 3",
      department: "Matematik",
    },
    {
      id: 4,
      className: "Sınıf 4",
      department: "Matematik",
    },
    {
      id: 5,
      className: "Sınıf 5",
      department: "Matematik",
    },
    {
      id: 6,
      className: "Sınıf 1",
      department: "Coğrafya",
    },
    {
      id: 7,
      className: "Sınıf 2",
      department: "Tarih",
    },
    {
      id: 8,
      className: "Sınıf 3",
      department: "Matematik",
    },
  ]);

  const handleDeleteItem = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  const renderItem = ({ item }: { item: newData }) => {
    return (
      <View style={styles.cardClassMain}>
        <StatusBar style="dark" />
        {profil == "teacher" ? (
          <>
            <TouchableOpacity
              style={styles.btnAbsTeacherLectureCard}
              onPress={() => handleDeleteItem(item.id)}
            >
              <Feather name="trash-2" size={font1820} color={white} />
            </TouchableOpacity>
          </>
        ) : null}
        <Image
          style={styles.imageCenter}
          source={require("../../../assets/images/system/logo.png")}
          resizeMode="contain"
        />
        <View style={{ width: "100%", marginTop: 5 }}>
          <Text
            style={styles.textBoldCardClassed}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.className}
          </Text>
          <Text
            style={styles.departmentBoldd}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.department}
          </Text>
          <Text
            style={styles.departmentBolddThirdy}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
              gap: 7,
            }}
          >
            {profil == "teacher" ? (
              <>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("home/teacher/addQuizessTeacher")
                  }
                  style={[
                    styles.orangeButtonCard,
                    {
                      borderWidth: 1,
                      borderColor: orange,
                      backgroundColor: white,
                    },
                  ]}
                >
                  <Text style={[styles.orangeButtonCardText, { color: black }]}>
                    Quiz Ekle
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.orangeButtonCard}
                  onPress={() =>
                    navigation.navigate("home/teacher/addHomeWork")
                  }
                >
                  <Text style={styles.orangeButtonCardText}>Ödev Eke</Text>
                </TouchableOpacity>
              </>
            ) : profil == "student" ? (
              <>
                <TouchableOpacity
                  onPress={() => handleDeleteItem(item.id)}
                  style={[
                    styles.orangeButtonCard,
                    {
                      borderWidth: 1,
                      borderColor: orange,
                      backgroundColor: white,
                    },
                  ]}
                >
                  <Text style={[styles.orangeButtonCardText, { color: black }]}>
                    Sınıftan ayrıl
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.orangeButtonCard}
                  onPress={() =>
                    navigation.navigate(
                      "home/studentClass/student_uploadHomeWork"
                    )
                  }
                >
                  <Text style={styles.orangeButtonCardText}>Ödev Yükle</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  style={styles.orangeButtonCard}
                  onPress={() =>
                    navigation.navigate("home/teacher/classDetai", {
                      toolBarHead: item.className,
                    })
                  }
                >
                  <Text style={styles.orangeButtonCardText}>Sınıfa Katıl</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
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
      <TopBar
        goBack={profil == "another" ? true : false}
        topBarName={nameSurname}
      />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            padding: width * 0.03,
            gap: width * 0.03,
          }}
        >
          {profil == "teacher" ? (
            <>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.btnCenterAddLecture}
                  onPress={() =>
                    navigation.navigate("home/studentClass/addNewClass")
                  }
                >
                  <View style={styles.bigOrangePlus}>
                    <AntDesign name="plus" size={font2024} color={white} />
                  </View>
                  <Text style={styles.centerPlusTeacherText}>
                    Yeni Sınıf Oluştur
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
          <Text style={styles.textBoldGenerate}>{classedName}</Text>

          <View style={{ width: "100%", flex: 1 }}>
            <FlatList
              contentContainerStyle={{}}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
      <Toolbar selectMenu={profil == "another" ? 1 : 2} />
    </View>
  );
}
