import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  FlatList,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "../../assets/styles/App.style";
import Toolbar from "../components/toolbar";
import {
  Fontisto,
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import {
  black,
  lightBlack,
  lightWhite,
  orange,
  white,
} from "../../assets/styles/colors";
import { font2024, font131517, font3640 } from "../../assets/styles/fontSize";
import { useState, useRef } from "react";
import { showMessage } from "react-native-flash-message";
export default function HompePage() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { height, width } = Dimensions.get("window");
  const [liked, setLiked] = useState(false);
  const [likedNumber, setLikedNumber] = useState(4445);
  const [commendModal, setCommendModal] = useState(false);
  const [commendModalMessage, setCommendModalMessage] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [rateModal, setRateModal] = useState(false);
  //   commend flatlist
  const scrollViewRef = useRef(null);
  const [commendData, setCommendData] = useState([
    {
      id: 1,
      image: require("../../assets/images/users/2.jpg"),
      name: "demo kullanıcı",
      commendDetail: "Lorem ipsum dolor sit amet",
      liked: 15,
      likedBtn: false,
    },
    {
      id: 2,
      image: require("../../assets/images/users/1.jpg"),
      name: "demo kullanıcı",
      commendDetail: "Lorem ipsum dolor sit amet",
      liked: 234,
      likedBtn: true,
    },
    {
      id: 3,
      image: require("../../assets/images/users/3.jpg"),
      name: "demo kullanıcı",
      commendDetail: "Lorem ipsum dolor",
      liked: 8096,
      likedBtn: true,
    },
    {
      id: 4,
      image: require("../../assets/images/users/4.jpg"),
      name: "demo kullanıcı",
      commendDetail: "Lorem ipsum dolor sit amet 😷",
      liked: 8096,
      likedBtn: true,
    },
  ]);
  const handleLikeToggle = (id) => {
    const updatedCommendData = commendData.map((commend) => {
      if (commend.id === id) {
        return {
          ...commend,
          liked: commend.likedBtn ? commend.liked + 1 : commend.liked - 1,
          likedBtn: !commend.likedBtn,
        };
      }
      return commend;
    });
    setCommendData(updatedCommendData);
  };

  const renderCommend = ({ item }) => {
    return (
      <View style={styles.commendMainFla}>
        <View style={styles.commendLeftModalMain}>
          <Image
            style={styles.homepageUserImage}
            source={item.image}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.nameModalSender}>{item.name}</Text>
            <Text style={styles.detailModalCommendText}>
              {item.commendDetail}
              {""}
              <Text style={{ fontSize: font131517, fontWeight: "300" }}>
                {""} 13h
              </Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ gap: 2, alignItems: "center" }}
          onPress={() => handleLikeToggle(item.id)}
        >
          <Entypo
            name={item.likedBtn ? "heart-outlined" : "heart"}
            size={24}
            color={item.likedBtn ? black : orange}
          />
          <Text>{item.liked}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const sendModalCommend = () => {
    if (commendModalMessage.trim() === "") {
      showMessage({
        message: "Hata",
        description: "Boş Yorum Yapılmaz",
        icon: (props) => (
          <FontAwesome
            name="times"
            size={32}
            color="#fff"
            style={{ marginRight: 15 }}
          />
        ),
        type: "danger",
      });
      return;
    }
    const newCommend = {
      id: commendData.length + 1,
      image: require("../../assets/images/users/developer.jpg"),
      name: "Tahsin Developer",
      commendDetail: commendModalMessage,
      liked: 0,
      likedBtn: true,
    };
    setCommendData([...commendData, newCommend]);
    setCommendModalMessage("");
  };
  //   rate start
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
          <AntDesign
            name="star"
            size={font3640}
            color={i <= rating ? "#fbc34c" : "#dadada"}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };
  //   rate end
  return (
    <View style={styles.mainTopView}>
      {/* burası canlı yayın Yeri */}
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,

          left: 0,
          zIndex: -10,
        }}
        source={require("../../assets/images/system/liveScreen.png")}
        resizeMode="cover"
      />
      <View
        style={{
          paddingTop: insets.top,
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            padding: width * 0.03,
            justifyContent: "space-between",
            paddingBottom: height * 0.05,
          }}
        >
          <View style={styles.indexRightBtnAbsoluteMain}>
            <TouchableOpacity
              style={styles.btnCenterRightHomePage}
              onPress={() => setLiked(!liked)}
            >
              <AntDesign
                name="heart"
                size={font2024}
                color={liked == true ? white : orange}
              />
              <Text style={styles.textRightGenerateAbsButton}>
                {liked == false ? likedNumber + 1 : likedNumber}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCenterRightHomePage}
              onPress={() => setCommendModal(true)}
            >
              <FontAwesome name="commenting" size={font2024} color={white} />
              <Text style={styles.textRightGenerateAbsButton}>
                {commendData.length}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCenterRightHomePage}
              onPress={() => setRateModal(true)}
            >
              <FontAwesome name="star" size={font2024} color={white} />
              <Text style={styles.textRightGenerateAbsButton}>Değerlendir</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnCenterRightHomePage}
              onPress={() =>
                navigation.navigate("home/messageDetail", {
                  name: "Sevim Yıldız",
                  profilImage: require("../../assets/images/users/2.jpg"),
                })
              }
            >
              <MaterialCommunityIcons
                name="message-settings"
                size={font2024}
                color={white}
              />
              <Text style={styles.textRightGenerateAbsButton}>
                Mesaj Gönder
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%" }}>
            <View style={styles.bannerHomePage}>
              <TouchableOpacity
                style={{ flexDirection: "row", gap: 10 }}
                onPress={() =>
                  navigation.navigate("home/teacher/teacherProfil", {
                    name: "SevimYıldız",
                    imageProfil: require("../../assets/images/users/2.jpg"),
                    department: " Coğrafya Öğretmeni",
                    detail: "Ege Üniversitesi",
                    nameSurname: "Sevim Yıldız",
                    topBarBtn: "add",
                  })
                }
              >
                <Image
                  style={styles.homepageUserImage}
                  source={require("../../assets/images/users/2.jpg")}
                  resizeMode="cover"
                />
                <View style={{ gap: 3 }}>
                  <Text style={styles.nameHomePageBanner}>@SevimYıldız</Text>
                  <Text style={styles.nameHomePageBanner}>
                    Coğrafya Öğretmeni
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.btnEnHomePageBanner}
                  onPress={() => setOpenSearch(!openSearch)}
                >
                  <Fontisto name="search" size={font2024} color={white} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnEnHomePageBanner}
                  onPress={() => navigation.navigate("home/notification")}
                >
                  <Feather name="bell" size={font2024} color={white} />
                </TouchableOpacity>
              </View>
            </View>
            {openSearch == true ? (
              <>
                <View
                  style={[
                    styles.messageBottomLineCommendModal,
                    {
                      borderRadius: 30,
                      backgroundColor: lightWhite,
                      marginTop: 15,
                    },
                  ]}
                >
                  <TextInput
                    placeholderTextColor={white}
                    style={styles.senderCommendModal}
                    placeholder="Arama Yap"
                  />
                  <TouchableOpacity
                    style={styles.senderMessageCommendModalButton}
                    onPress={() => setOpenSearch(false)}
                  >
                    <Feather name="search" size={font2024} color={white} />
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
          </View>
          <View style={styles.bottomIndexLive}>
            <Text style={styles.homePageLiveBottomText}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text style={styles.homePageLiveBottomText}>
              #cografya #lorem #loremipsum
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingBottom: insets.bottom,
          }}
        >
          <Toolbar selectMenu={1} />
        </View>
      </View>

      {/* commend modal start */}
      <Modal
        style={{
          zIndex: 9,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          animationType: "slide",
        }}
        transparent={true}
        visible={commendModal}
      >
        <View style={styles.modalEnd}>
          <TouchableOpacity
            onPress={() => setCommendModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <KeyboardAvoidingView
            style={[styles.modalInDetail]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.btwModalHeader}>
              <View></View>
              <Text style={styles.centerBoldHeaderModal}>
                {" "}
                {commendData.length} Yorum
              </Text>
              <TouchableOpacity onPress={() => setCommendModal(false)}>
                <FontAwesome name="times" size={font2024} color={black} />
              </TouchableOpacity>
            </View>
            <ScrollView
              ref={scrollViewRef}
              style={{ width: "100%" }}
              showsVerticalScrollIndicator={false}
              onContentSizeChange={() =>
                scrollViewRef.current.scrollToEnd({ y: 0, animated: false })
              }
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: width * 0.05 }}
                data={commendData}
                renderItem={renderCommend}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={
                  <Text
                    style={[styles.nameModalSender, { textAlign: "center" }]}
                  >
                    Henüz Bir Yorum Yok
                  </Text>
                }
              />
            </ScrollView>
            <View
              style={[
                styles.messageBottomLineCommendModal,
                { paddingBottom: insets.bottom },
              ]}
            >
              <TextInput
                placeholderTextColor={lightBlack}
                style={styles.senderCommendModal}
                placeholder="Yorum Ekle"
                onChangeText={setCommendModalMessage}
                value={commendModalMessage}
              />
              <TouchableOpacity
                style={styles.senderMessageCommendModalButton}
                onPress={sendModalCommend}
              >
                <Feather name="send" size={font2024} color={black} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
      {/* commend modal end */}
      {/* rate modal start */}
      <Modal
        style={{
          zIndex: 9,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          animationType: "slide",
        }}
        transparent={true}
        visible={rateModal}
      >
        <View style={styles.modalEnd}>
          <TouchableOpacity
            onPress={() => setRateModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <KeyboardAvoidingView
            style={styles.modalInDetail}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.btwModalHeader}>
              <View></View>
              <Text style={styles.centerBoldHeaderModal}>Değerlendir</Text>
              <TouchableOpacity onPress={() => setRateModal(false)}>
                <FontAwesome name="times" size={font2024} color={black} />
              </TouchableOpacity>
            </View>
            <ScrollView
              ref={scrollViewRef}
              style={{ width: "100%" }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                gap: height * 0.05,
                paddingBottom: height * 0.05,
              }}
            >
              <Image
                style={styles.rateBigIcon}
                resizeMode="contain"
                source={
                  rating == 1
                    ? require("../../assets/images/rateFile/rate1.png")
                    : rating == 2
                    ? require("../../assets/images/rateFile/rate2.png")
                    : rating == 3
                    ? require("../../assets/images/rateFile/rate3.png")
                    : rating == 4
                    ? require("../../assets/images/rateFile/rate4.png")
                    : rating == 5
                    ? require("../../assets/images/rateFile/rate5.png")
                    : require("../../assets/images/rateFile/rate1.png")
                }
              />
              <View style={styles.starCenterRated}>{renderStars()}</View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
      {/* tete modal end */}
    </View>
  );
}
