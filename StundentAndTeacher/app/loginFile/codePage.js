import { useNavigation } from "expo-router";
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
} from "../../assets/styles/colors";
import {
  View,
  Image,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import { useRef, useState, useEffect } from "react";
export default function CodePage() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const [time, setTime] = useState();
  const timeFunc = () => {
    setTime(60);
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  };
  useEffect(() => {
    timeFunc();
  }, []);

  useEffect(() => {
    if (time === 0) {
      console.log("Zaman bitti!");
      showMessage({
        message: "Süre Bitti !",
        description: "Tekrar Kod Gönderin",
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
    }
  }, [time]);

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
      <View
        style={{
          width: "100%",
          height: "100%",
          gap: 10,
          alignItems: "center",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <Image
          style={styles.imagesToplogins}
          source={require("../../assets/images/loginImage/password.png")}
          resizeMode="contain"
        />
        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.loginComplateLightWhite}>
            <Formik
              style={{ width: "100%", height: "100%" }}
              initialValues={{ square1: "" }}
              onSubmit={(values) => {
                if (
                  values.square1 != "" &&
                  values.square2 != "" &&
                  values.square3 != "" &&
                  values.square4 != ""
                ) {
                  showMessage({
                    message: "Doğrulandı",
                    description: "İşleminiz Devam Ediyor",
                    icon: (props) => (
                      <AntDesign
                        name="checkcircleo"
                        size={32}
                        color="#fff"
                        style={{ marginRight: 15 }}
                      />
                    ),
                    type: "simpleMessage",
                  });
                  setTimeout(() => {
                    navigation.navigate("loginFile/newPassword");

                    console.log(values);
                  }, 3000);
                } else {
                  showMessage({
                    message: "Lütfen Boş Bırakmayınız",
                    description: "Cep Telefonunuza Gelen Kodu Yazınız",
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
                }
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <ScrollView
                    contentContainerStyle={{
                      width: "100%",
                      gap: 10,
                    }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Text style={styles.loginWellcomeText}>
                      Şifremi Unuttum
                    </Text>
                    <Text style={styles.loginBottomTopHeADER}>
                      Cep Telefonunuza gelen kodu giriniz
                    </Text>

                    <View
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        marginVertical: 25,
                      }}
                    >
                      <TextInput
                        maxLength={1}
                        style={styles.squareInput}
                        placeholderTextColor={white}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                          handleChange("square1")(text);
                          if (text.length === 1) {
                            inputRef2.current.focus();
                          }
                        }}
                        onBlur={handleBlur("square1")}
                        value={values.square1}
                      />
                      <TextInput
                        ref={inputRef2}
                        maxLength={1}
                        style={styles.squareInput}
                        placeholderTextColor={white}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                          handleChange("square2")(text);
                          if (text.length === 1) {
                            inputRef3.current.focus();
                          }
                        }}
                        onBlur={handleBlur("square2")}
                        value={values.square2}
                      />
                      <TextInput
                        ref={inputRef3}
                        maxLength={1}
                        style={styles.squareInput}
                        placeholderTextColor={white}
                        keyboardType="numeric"
                        onChangeText={(text) => {
                          handleChange("square3")(text);
                          if (text.length === 1) {
                            inputRef4.current.focus();
                          }
                        }}
                        onBlur={handleBlur("square3")}
                        value={values.square3}
                      />
                      <TextInput
                        ref={inputRef4}
                        maxLength={1}
                        style={styles.squareInput}
                        placeholderTextColor={white}
                        keyboardType="numeric"
                        onChangeText={handleChange("square4")}
                        onBlur={handleBlur("square4")}
                        value={values.square4}
                      />
                    </View>
                    <Text style={styles.timeCodePageText}>
                      Süre içinde kodu giriniz{" "}
                      <Text style={{ color: white, fontWeight: "600" }}>
                        {time}
                      </Text>{" "}
                      sn
                    </Text>
                    {time != 0 ? (
                      <>
                        <TouchableOpacity
                          style={[styles.mainButton, { marginTop: 15 }]}
                          onPress={handleSubmit}
                        >
                          <Text style={styles.mainButtonText}>Doğrula</Text>
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                        <TouchableOpacity
                          style={[styles.mainButton, { marginTop: 15 }]}
                          onPress={timeFunc}
                        >
                          <Text style={styles.mainButtonText}>
                            Tekrar Gönder
                          </Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </ScrollView>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}
