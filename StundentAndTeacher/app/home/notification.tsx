import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Dimensions, Text, FlatList } from "react-native";
import styles from "../../assets/styles/App.style";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { black } from "@/assets/styles/colors";
import { font2024 } from "@/assets/styles/fontSize";
import { StatusBar } from "expo-status-bar";
export default function Notification() {
  interface GeneralResponse {
    globalEmail: string;
  }
  interface RootState {
    GeneralResponse: GeneralResponse;
  }
  const { GeneralResponse } = useSelector((state: RootState) => state);
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();

  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  interface DataTeacher {
    id: number;
    header: string;
    detail: string;
    date: string;
  }
  const data: DataTeacher[] = [
    {
      id: 1,
      header: "Favori öğretmenin yeni bir video yükledi!",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      date: "01.01.2024",
    },
  ];
  for (let i: number = 1; i < 20; i++) {
    data.push({
      id: data.length + 1,
      header: "Favori öğretmenin yeni bir video yükledi!",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore",
      date: "04.05.2024",
    });
  }
  const renderItem = ({ item }: { item: DataTeacher }) => {
    return (
      <View style={styles.cardNotification}>
        <Text style={styles.notificationHeader}>{item.header}</Text>
        <Text style={styles.textNorificationGenerateDetail}>{item.detail}</Text>
        <Text style={styles.dataNotificationGenerate}>{item.date}</Text>
      </View>
    );
  };
  interface DataTeacherSecond {
    id: number;
    user: string;
    detail: string;
    date: string;
    iconName: any;
  }
  const dataTeacher: DataTeacherSecond[] = [
    {
      id: 1,
      user: "Demo Kullanıcı",
      detail: "videonu beğendi",
      date: "03.05.2024",
      iconName: "heart",
    },
    {
      id: 2,
      user: "Demo Kullanıcı",
      detail: " videona yorum yaptı",
      date: "03.05.2024",
      iconName: "message1",
    },
    {
      id: 3,
      user: "Demo Kullanıcı",
      detail: "videonu beğendi",
      date: "03.05.2024",
      iconName: "star",
    },
    {
      id: 4,
      user: "Demo Kullanıcı",
      detail: "Sınıfa Katıldı",
      date: "03.05.2024",
      iconName: "table",
    },
    {
      id: 5,
      user: "Demo Kullanıcı",
      detail: "Bir ödev yükledi",
      date: "03.05.2024",
      iconName: "clouduploado",
    },
  ];

  const renderItemTeacher = ({ item }: { item: DataTeacherSecond }) => {
    return (
      <View style={styles.cardNotification}>
        <StatusBar style="dark" />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            gap: width * 0.03,
            alignItems: "center",
          }}
        >
          <AntDesign name={item.iconName} size={font2024} color={black} />
          <View style={{ flex: 1, gap: width * 0.02 }}>
            <Text style={styles.textNorificationGenerateDetail}>
              <Text style={{ fontWeight: "600" }}>{item.user}</Text>
              {item.detail}
            </Text>
            <Text style={styles.dataNotificationGenerate}>{item.date}</Text>
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
      <TopBar goBack={true} topBarName="Bildirimler" rightBtn={"nully"} />
      <View style={{ width: "100%", flex: 1 }}>
        {GeneralResponse.globalEmail == "teacher" ? (
          <>
            <FlatList
              data={dataTeacher}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: width * 0.03,
                gap: width * 0.03,
              }}
              renderItem={renderItemTeacher}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={
                <Text style={styles.centerNotNotification}>
                  Henüz Hiç Bildiriminiz Yok !
                </Text>
              }
            />
          </>
        ) : (
          <>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingVertical: width * 0.03,
                gap: width * 0.03,
              }}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              ListEmptyComponent={
                <Text style={styles.centerNotNotification}>
                  Henüz Hiç Bildiriminiz Yok !
                </Text>
              }
            />
          </>
        )}
      </View>
      <Toolbar selectMenu={1} />
    </View>
  );
}
