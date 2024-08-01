import React from "react";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Dimensions,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styles from "../../../assets/styles/App.style";
import { useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { font131517, font1820 } from "@/assets/styles/fontSize";
import { black, orange, white } from "@/assets/styles/colors";
import TopBar from "@/app/components/topBar";
import Toolbar from "@/app/components/toolbar";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import HomeworkComp from "@/app/components/homerWorkComp";
type TeacherProfileParams = {
  name: string;
  imageProfil: any;
  department: string;
  profil: string;
  detail: string;
  nameSurname: string;
  topBarBtn: string;
};

export default function HomePage() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();
  const [tabStudent, setTabStudent] = useState(1);
  const insets = useSafeAreaInsets();
  const [videoState, setVideoState] = useState(false);
  const { height, width } = Dimensions.get("window");
  const {
    name,
    imageProfil,
    department = "",
    profil = "another",
    detail,
    nameSurname,
    topBarBtn,
  } = useLocalSearchParams<TeacherProfileParams>();
  const star = ["", "", "", "", ""];
  interface ShareItem {
    id: number;
    videoImage: any;
  }
  const [modalImage, setModalImage] = useState();
  const share: ShareItem[] = [
    {
      id: 1,
      videoImage: require("../../../assets/images/video/videoImage.png"),
    },
  ];

  for (let i = 1; i < 15; i++) {
    share.push({
      id: share.length + i,
      videoImage:
        i % 2 === 0
          ? require("../../../assets/images/video/videoImage.png")
          : i % 5 === 0
          ? require("../../../assets/images/video/videoImage3.png")
          : require("../../../assets/images/video/videoImage2.png"),
    });
  }
  const renderShare = ({ item }: { item: ShareItem }) => {
    return (
      <TouchableOpacity
        style={styles.btnVideoTouchTeacher}
        onPress={() => {
          setVideoState(true), setModalImage(item.videoImage);
        }}
      >
        <Image
          style={styles.imagesVideo}
          resizeMode="cover"
          source={item.videoImage}
        />
      </TouchableOpacity>
    );
  };
  interface Data {
    id: number;
    detail: string;
  }
  const data: Data[] = [
    {
      id: 1,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
    },
    {
      id: 2,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
    },

    {
      id: 3,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
    },
    {
      id: 4,
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor",
    },
  ];
  const renderItem = ({ item }: { item: Data }) => {
    return (
      <View style={{ width: "50%", padding: width * 0.01 }}>
        <HomeworkComp detail={item.detail} />
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
      <TopBar
        goBack={profil == "another" ? true : false}
        topBarName={nameSurname}
        rightBtn={topBarBtn}
      />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            height: "100%",
            padding: width * 0.03,
            paddingBottom: 0,
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              gap: width * 0.01,
              paddingBottom: width * 0.03,
            }}
          >
            <Image
              style={styles.imagesTeacherProfile}
              resizeMode="cover"
              source={imageProfil}
            />
            <Text style={styles.textNameTeacherProfil}>@{name}</Text>
            {profil != "student" ? (
              <>
                <Text style={styles.textNameTeacherProfil}>{department}</Text>
              </>
            ) : null}
            <Text style={styles.minimalTeacherProfil}>{detail}</Text>
            {profil == "teacher" ? (
              <>
                <View style={styles.centerStarsGenerateTeacherProfil}>
                  {star.map((index, item) => (
                    <AntDesign name="star" size={font1820} color={orange} />
                  ))}
                </View>
                <View style={styles.followersProfilAnother}>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>
                      {share.length}
                    </Text>
                    <Text style={styles.bottomAnotherProfile}>Video</Text>
                  </View>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>632</Text>
                    <Text style={styles.bottomAnotherProfile}>Yorum</Text>
                  </View>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>291</Text>
                    <Text style={styles.bottomAnotherProfile}>Öğrenci</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={styles.buttonEditsTeacherButton}
                    onPress={() =>
                      navigation.navigate("home/profilFile/editProfille", {
                        profil: profil,
                        imageProfil: imageProfil,
                      })
                    }
                  >
                    <Text style={styles.textbuttonEditsTeacherButton}>
                      Profili Düzenle
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : profil == "student" ? (
              <>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={styles.buttonEditsTeacherButton}
                    onPress={() =>
                      navigation.navigate("home/profilFile/editProfille", {
                        profil: profil,
                        imageProfil: imageProfil,
                      })
                    }
                  >
                    <Text style={styles.textbuttonEditsTeacherButton}>
                      Profili Düzenle
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 50,
                    borderBottomWidth: 1,
                    borderBottomColor: "#dadada",
                    paddingHorizontal: width * 0.05,
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setTabStudent(1)}
                    style={
                      tabStudent == 1
                        ? styles.activeStudentTab
                        : styles.pasiveStudentTab
                    }
                  >
                    <Text style={{ fontSize: font131517, color: black }}>
                      Beğeniler
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setTabStudent(2)}
                    style={
                      tabStudent == 2
                        ? styles.activeStudentTab
                        : styles.pasiveStudentTab
                    }
                  >
                    <Text style={{ fontSize: font131517, color: black }}>
                      Yorumlar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setTabStudent(3)}
                    style={
                      tabStudent == 3
                        ? styles.activeStudentTab
                        : styles.pasiveStudentTab
                    }
                  >
                    <Text style={{ fontSize: font131517, color: black }}>
                      Ödevler
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View style={styles.centerStarsGenerateTeacherProfil}>
                  {star.map((index, item) => (
                    <AntDesign name="star" size={font1820} color={orange} />
                  ))}
                </View>
                <View style={styles.followersProfilAnother}>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>
                      {share.length}
                    </Text>
                    <Text style={styles.bottomAnotherProfile}>Video</Text>
                  </View>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>632</Text>
                    <Text style={styles.bottomAnotherProfile}>Yorum</Text>
                  </View>
                  <View style={{ alignItems: "center", gap: height * 0.002 }}>
                    <Text style={styles.numberTextGenerate}>291</Text>
                    <Text style={styles.bottomAnotherProfile}>Öğrenci</Text>
                  </View>
                </View>
                <View style={styles.btnOrangeWhiteTeacherTop}>
                  <TouchableOpacity
                    style={styles.btnTeacherProfile}
                    onPress={() =>
                      navigation.navigate("home/teacher/allClass", {
                        nameSurname: nameSurname,
                        classedName: "Sınıflar",
                      })
                    }
                  >
                    <LinearGradient
                      style={styles.gradeidInDetailTeacher}
                      colors={[orange, orange]}
                    >
                      <Text style={styles.textGradiendBtnIn}>Sınıflar</Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.btnTeacherProfile}
                    onPress={() =>
                      navigation.navigate("home/studentClass/successPage", {
                        banners: "nully",
                      })
                    }
                  >
                    <LinearGradient
                      style={styles.gradeidInDetailTeacher}
                      colors={[orange, orange]}
                    >
                      <Text style={styles.textGradiendBtnIn}>Başarılar</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnTeacherProfile}
                    onPress={() =>
                      navigation.navigate("home/messageDetail", {
                        name: nameSurname,
                        profilImage: imageProfil,
                      })
                    }
                  >
                    <LinearGradient
                      style={[styles.gradeidInDetailTeacher, { padding: 2 }]}
                      colors={[orange, orange]}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 30,
                          backgroundColor: white,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={[styles.textGradiendBtnIn, { color: black }]}
                        >
                          Mesaj Gönder
                        </Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
          {tabStudent == 1 ? (
            <>
              <View style={{ width: "100%", flex: 1 }}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                    gap: width * 0.001,
                  }}
                  data={share}
                  renderItem={renderShare}
                  keyExtractor={(item) => item.id.toString()}
                  numColumns={3}
                />
              </View>
            </>
          ) : tabStudent == 2 ? (
            <>
              <View style={{ width: "100%", gap: width * 0.03 }}>
                {star.map((index, item) => (
                  <View style={{ width: "100%" }}>
                    <View style={styles.commendMainFla}>
                      <View style={styles.commendLeftModalMain}>
                        <Image
                          style={styles.homepageUserImage}
                          source={require("../../../assets/images/users/4.jpg")}
                          resizeMode="cover"
                        />
                        <View>
                          <Text style={styles.nameModalSender}>
                            demo kullanıcı
                          </Text>
                          <Text style={styles.detailModalCommendText}>
                            Lorem ipsum dolor sit amet 😷
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </>
          ) : (
            <>
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
            </>
          )}
        </ScrollView>
      </View>
      <Toolbar selectMenu={profil == "another" ? 1 : 5} />
      {videoState == true ? (
        <>
          <View style={styles.videoWatch}>
            <TouchableOpacity
              style={{ width: "100%", flex: 1 }}
              onPress={() => setVideoState(false)}
            ></TouchableOpacity>
            <View style={styles.whiteVideoWtach}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                source={modalImage}
              />
            </View>
            <TouchableOpacity
              style={{ width: "100%", flex: 1 }}
              onPress={() => setVideoState(false)}
            ></TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
}
