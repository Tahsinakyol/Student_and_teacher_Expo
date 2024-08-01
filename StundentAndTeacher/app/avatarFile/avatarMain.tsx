import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../../assets/styles/App.style";
import { LinearGradient } from "expo-linear-gradient";
import {
  gradiend1,
  gradiend2,
  gradiend3,
  gradiend4,
  gradiend5,
  gradiend6,
  gradiend7,
  gradiend8,
  gradiend9,
  gradiend10,
  white,
  black,
  secGradiend1,
  secGradiend2,
  secGradiend3,
} from "../../assets/styles/colors";
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { font131517, font2024 } from "@/assets/styles/fontSize";
import { useNavigation } from "expo-router";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
export default function AvatarMain() {
  const insets = useSafeAreaInsets();
  interface Root {
    navigate: any;
  }
  const navigation = useNavigation<Root>();
  const { height, width } = Dimensions.get("window");
  const [avatarMainState, setAvatarMainState] = useState<number>(1);
  const [avatarChange, setAvatarChange] = useState<number>(1);
  const savedButton = () => {
    showMessage({
      message: "Başarılı !",
      description: "Avatarınız Kayıt Edildi !",
      icon: (props: any) => (
        <AntDesign
          name="checkcircleo"
          size={32}
          color="#fff"
          style={{ marginRight: 15 }}
        />
      ),
      type: "simpleMessage" as never,
    });
    setTimeout(() => {
      navigation.navigate("loginFile/chooseCategories");
    }, 2000);
  };
  type mainav = {
    id: number;
    images: any;
  };
  const mainAvatar: mainav[] = [
    { id: 1, images: require("../../assets/images/avatars/avMain/ava1.png") },
    { id: 2, images: require("../../assets/images/avatars/avMain/ava2.png") },
    { id: 3, images: require("../../assets/images/avatars/avMain/ava3.png") },
    { id: 4, images: require("../../assets/images/avatars/avMain/ava4.png") },
  ];
  const mainAvatarRender = ({ item }: { item: mainav }) => {
    return (
      <TouchableOpacity
        style={{ width: width * 0.5, padding: width * 0.03 }}
        onPress={() => {
          setAvatarChange(item.id),
            setPalduron(1),
            setDataBluzState(2),
            setDataDogState(0),
            setDataShooesState(0),
            setDataHatState(0),
            setDataAcsesoryState(0);
        }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={
            avatarChange == item.id
              ? [secGradiend1, secGradiend2, secGradiend3]
              : [white, white]
          }
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "70%", height: "70%" }}
              resizeMode="contain"
              source={item.images}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const buttonData = [
    {
      id: 1,
      activeImage: require("../../assets/images/buttons/ac1.png"),
      pasiveImage: require("../../assets/images/buttons/pas1.png"),
    },
    {
      id: 2,
      activeImage: require("../../assets/images/buttons/ac2.png"),
      pasiveImage: require("../../assets/images/buttons/pas2.png"),
    },
    {
      id: 3,
      activeImage: require("../../assets/images/buttons/ac3.png"),
      pasiveImage: require("../../assets/images/buttons/pas3.png"),
    },
    {
      id: 4,
      activeImage: require("../../assets/images/buttons/ac4.png"),
      pasiveImage: require("../../assets/images/buttons/pas4.png"),
    },
    {
      id: 5,
      activeImage: require("../../assets/images/buttons/ac5.png"),
      pasiveImage: require("../../assets/images/buttons/pas5.png"),
    },
    {
      id: 6,
      activeImage: require("../../assets/images/buttons/ac6.png"),
      pasiveImage: require("../../assets/images/buttons/pas6.png"),
    },
    {
      id: 7,
      activeImage: require("../../assets/images/buttons/ac7.png"),
      pasiveImage: require("../../assets/images/buttons/pas7.png"),
    },
  ];
  const [palduron, setPalduron] = useState(1);
  type paldo = {
    id: number;
    buttonImage: any;
    gender?: boolean;
  };
  const dataPalduron: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/pald/button1p.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/pald/button2p.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 3,
      buttonImage: require("../../assets/images/avatars/pald/button3p.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 4,
      buttonImage: require("../../assets/images/avatars/pald/button4p.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 5,
      buttonImage: require("../../assets/images/avatars/pald/button5p.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
  ];
  const dataPalduronFiltered = dataPalduron.filter(
    (item) => item.gender !== false
  );
  const dataPalduronRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setPalduron(item.id), setDataDogState(0);
        }}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const [dataBluzState, setDataBluzState] = useState(2);

  const dataBluz: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/bluz/b1.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/bluz/b2.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 3,
      buttonImage: require("../../assets/images/avatars/bluz/b3.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 4,
      buttonImage: require("../../assets/images/avatars/bluz/b4.png"),
      gender: avatarChange == 1 || avatarChange == 2 ? true : false,
    },
    {
      id: 5,
      buttonImage: require("../../assets/images/avatars/bluz/b5.png"),
      gender: avatarChange == 3 || avatarChange == 4 ? true : false,
    },
    {
      id: 6,
      buttonImage: require("../../assets/images/avatars/bluz/b6.png"),
      gender: avatarChange == 3 || avatarChange == 4 ? true : false,
    },
  ];
  const dataBluzFiltered = dataBluz.filter((item) => item.gender !== false);
  const dataBluzRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => setDataBluzState(item.id)}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const [dataDogState, setDataDogState] = useState(0);
  const dataDog: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/dog/dogButton1.png"),
      gender: avatarChange == 3 || avatarChange == 4 ? true : false,
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/dog/dogButton2.png"),
      gender: avatarChange == 3 || avatarChange == 4 ? true : false,
    },
  ];
  const dataDogFiltered = dataDog.filter((item) => item.gender !== false);
  const dataDogRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDataDogState(item.id), setPalduron(0);
        }}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const [dataShooesState, setDataShooesState] = useState(1);
  const dataShooes: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/shooes/shoeButton1.png"),
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/shooes/shoeButton2.png"),
    },
    {
      id: 3,
      buttonImage: require("../../assets/images/avatars/shooes/shoeButton3.png"),
    },
    {
      id: 4,
      buttonImage: require("../../assets/images/avatars/shooes/shoeButton4.png"),
    },
    {
      id: 5,
      buttonImage: require("../../assets/images/avatars/shooes/shoeButton5.png"),
    },
  ];
  const dataShooesRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDataShooesState(item.id);
        }}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const [dataHatState, setDataHatState] = useState(0);
  const dataHat: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/hat/topButton1.png"),
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/hat/topButton2.png"),
    },
    {
      id: 3,
      buttonImage: require("../../assets/images/avatars/hat/topButton3.png"),
    },
    {
      id: 4,
      buttonImage: require("../../assets/images/avatars/hat/topButton4.png"),
    },
    {
      id: 5,
      buttonImage: require("../../assets/images/avatars/hat/topButton5.png"),
    },
    {
      id: 6,
      buttonImage: require("../../assets/images/avatars/hat/topButton6.png"),
    },
  ];
  const dataHatRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDataHatState(item.id);
        }}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const [dataAcsesoryState, setDataAcsesoryState] = useState(0);
  const dataAcsesory: paldo[] = [
    {
      id: 1,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton1.png"),
    },
    {
      id: 2,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton2.png"),
    },
    {
      id: 3,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton3.png"),
    },
    {
      id: 4,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton4.png"),
    },
    {
      id: 5,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton5.png"),
    },
    {
      id: 6,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton6.png"),
    },
    {
      id: 7,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton7.png"),
    },
    {
      id: 8,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton8.png"),
    },
    {
      id: 9,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton9.png"),
    },
    {
      id: 10,
      buttonImage: require("../../assets/images/avatars/accesButtons/acseButton10.png"),
    },
  ];
  const dataAcsesoryRender = ({ item }: { item: paldo }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setDataAcsesoryState(item.id);
        }}
        style={{ width: width * 0.5, padding: width * 0.03 }}
      >
        <LinearGradient
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            padding: 5,
          }}
          colors={[secGradiend1, secGradiend2, secGradiend3]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={item.buttonImage}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <LinearGradient
      colors={[
        gradiend1,
        gradiend2,
        gradiend3,
        gradiend4,
        gradiend5,
        gradiend5,
        gradiend6,
        gradiend7,
        gradiend8,
        gradiend9,
        gradiend10,
      ]}
      style={styles.gradiendMain}
    >
      <StatusBar style="light" />
      <View
        style={{
          width: "100%",
          height: "100%",
          gap: 10,
          alignItems: "center",
          paddingTop: insets.top,
        }}
      >
        <View style={styles.avatartBannerTops}>
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => navigation.navigate("home/homePage")}
          >
            <FontAwesome name="times" size={font2024} color={white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.orangeButtonsAvatarMain}
            onPress={savedButton}
          >
            <Text style={styles.textWhiteColorButtonAvatar}>Kaydet</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.orangeButtonsAvatarMain,
              {
                position: "absolute",
                bottom: "50%",
                zIndex: 10,
                right: 10,
                backgroundColor: black,
              },
            ]}
            onPress={() => {
              setAvatarChange(1),
                setPalduron(1),
                setDataBluzState(2),
                setDataDogState(0),
                setDataShooesState(0),
                setDataHatState(0),
                setDataAcsesoryState(0);
            }}
          >
            <Text style={styles.textWhiteColorButtonAvatar}>Reset</Text>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              height: height * 0.45,
              zIndex: 1,
            }}
          >
            {/* burası kafa bolumu */}
            <Image
              style={{
                height: "100%",
                aspectRatio: 1 / 1,
                position: "absolute",
              }}
              resizeMode="contain"
              source={
                avatarChange == 1
                  ? require("../../assets/images/avatars/head/e1.png")
                  : avatarChange == 2
                  ? require("../../assets/images/avatars/head/e2.png")
                  : avatarChange == 3
                  ? require("../../assets/images/avatars/head/k2.png")
                  : require("../../assets/images/avatars/head/k1.png")
              }
            />
            {/* burası iskelet */}
            <Image
              style={{ height: "100%", aspectRatio: 1 / 1 }}
              resizeMode="contain"
              source={require("../../assets/images/avatars/avMain/iskelet.png")}
            />
            {/* burası pantolon kısmı */}

            {palduron == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/pald/1p.png")}
                />
              </>
            ) : null}
            {palduron == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/pald/2p.png")}
                />
              </>
            ) : null}
            {palduron == 3 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/pald/3p.png")}
                />
              </>
            ) : null}
            {palduron == 4 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/pald/4p.png")}
                />
              </>
            ) : null}
            {palduron == 5 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/pald/5p.png")}
                />
              </>
            ) : null}

            {/* burası blus kısmı */}
            {dataBluzState == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b1.png")}
                />
              </>
            ) : null}
            {dataBluzState == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b2.png")}
                />
              </>
            ) : null}
            {dataBluzState == 3 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b3.png")}
                />
              </>
            ) : null}
            {dataBluzState == 4 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b4.png")}
                />
              </>
            ) : null}
            {dataBluzState == 5 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b5.png")}
                />
              </>
            ) : null}
            {dataBluzState == 6 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                    zIndex: 2,
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/bluz/b6.png")}
                />
              </>
            ) : null}
            {/* burası etek kısmı */}
            {dataDogState == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/dog/dog1.png")}
                />
              </>
            ) : null}
            {dataDogState == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/dog/dog2.png")}
                />
              </>
            ) : null}
            {/* burası ayakkabı kısmı */}
            {dataShooesState == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/shooes/sho1.png")}
                />
              </>
            ) : null}
            {dataShooesState == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/shooes/sho2.png")}
                />
              </>
            ) : null}
            {dataShooesState == 3 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/shooes/sho3.png")}
                />
              </>
            ) : null}
            {dataShooesState == 4 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/shooes/sho4.png")}
                />
              </>
            ) : null}
            {dataShooesState == 5 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/shooes/sho5.png")}
                />
              </>
            ) : null}
            {/* burası Sapka kısmı */}
            {dataHatState == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/ears/ear1.png")}
                />
              </>
            ) : null}
            {dataHatState == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/ears/ear2.png")}
                />
              </>
            ) : null}
            {dataHatState == 3 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/hat/ha1.png")}
                />
              </>
            ) : null}
            {dataHatState == 4 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/hat/ha2.png")}
                />
              </>
            ) : null}
            {dataHatState == 5 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/hat/ha3.png")}
                />
              </>
            ) : null}
            {dataHatState == 6 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/hat/ha4.png")}
                />
              </>
            ) : null}
            {/* burası kupe ve gozluk yeri */}
            {dataAcsesoryState == 1 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/earings/earing1.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 2 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/earings/earing2.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 3 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/earings/earing3.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 4 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/earings/earing4.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 5 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass1.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 6 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass2.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 7 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass3.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 8 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass4.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 9 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass5.png")}
                />
              </>
            ) : null}
            {dataAcsesoryState == 10 ? (
              <>
                <Image
                  style={{
                    height: "100%",
                    aspectRatio: 1 / 1,
                    position: "absolute",
                  }}
                  resizeMode="contain"
                  source={require("../../assets/images/avatars/glasses/glass6.png")}
                />
              </>
            ) : null}
          </View>
          <Image
            style={{
              width: "100%",
              height: height * 0.3,
              marginTop: -(height * 0.15),
            }}
            resizeMode="contain"
            source={require("../../assets/images/avatars/bottomAvatar.png")}
          />
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: white,
            marginTop: -130,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom: insets.bottom + 10,
          }}
        >
          <View style={styles.headerTopModaAvatarPage}>
            <TouchableOpacity style={styles.buttonBackAndNextAvatarPage}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={font2024}
                color={black}
              />
            </TouchableOpacity>
            <Text style={{ color: black, fontSize: font131517 }}>
              Tipini Belirle
            </Text>
            <TouchableOpacity style={styles.buttonBackAndNextAvatarPage}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={font2024}
                color={black}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            {avatarMainState == 1 ? (
              <>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={mainAvatar}
                  renderItem={mainAvatarRender}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            ) : avatarMainState == 2 ? (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataPalduronFiltered}
                  renderItem={dataPalduronRender}
                  keyExtractor={(item) => item.id.toString()}
                  ListEmptyComponent={
                    <Text
                      style={{
                        textAlign: "center",
                        margin: 10,
                        fontSize: font131517,
                        color: black,
                        fontWeight: "600",
                      }}
                    >
                      Bu Alan Erkek Avatar İçindir
                    </Text>
                  }
                />
              </>
            ) : avatarMainState == 3 ? (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataBluzFiltered}
                  renderItem={dataBluzRender}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            ) : avatarMainState == 4 ? (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataDogFiltered}
                  renderItem={dataDogRender}
                  keyExtractor={(item) => item.id.toString()}
                  ListEmptyComponent={
                    <Text
                      style={{
                        textAlign: "center",
                        margin: 10,
                        fontSize: font131517,
                        color: black,
                        fontWeight: "600",
                      }}
                    >
                      Bu Alan Kadın Avatar İçindir
                    </Text>
                  }
                />
              </>
            ) : avatarMainState == 5 ? (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataShooes}
                  renderItem={dataShooesRender}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            ) : avatarMainState == 6 ? (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataHat}
                  renderItem={dataHatRender}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            ) : (
              <>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={dataAcsesory}
                  renderItem={dataAcsesoryRender}
                  keyExtractor={(item) => item.id.toString()}
                />
              </>
            )}
          </View>

          <View style={styles.allItemsButtonBottom}>
            {buttonData.map((item, index) => (
              <TouchableOpacity
                style={styles.buttonClickeBottom}
                onPress={() => setAvatarMainState(item.id)}
              >
                <Image
                  style={styles.imagesCenterButton}
                  resizeMode="contain"
                  source={
                    avatarMainState == item.id
                      ? item.activeImage
                      : item.pasiveImage
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
