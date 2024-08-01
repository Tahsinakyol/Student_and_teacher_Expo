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
  iconColor,
  white,
  orange,
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
import { Feather } from "@expo/vector-icons";
import { font1820 } from "../../assets/styles/fontSize";
import { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";
import { useSelector, useDispatch } from "react-redux";
import { SetGlobalemail } from "../redux/action";
export default function Login() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [see, setSee] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector((state) => state);
  const validationSchema = yup.object().shape({
    emailOrPhone: yup
      .string()
      .required("E-posta veya telefon numarası gereklidir."),
    password: yup.string().required("Şifre gereklidir."),
  });
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
          source={require("../../assets/images/loginImage/books.png")}
          resizeMode="contain"
        />
        <KeyboardAvoidingView
          style={{ flex: 1, width: "100%" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.loginComplateLightWhite}>
            <Formik
              style={{ width: "100%", height: "100%" }}
              initialValues={{ emailOrPhone: "", password: "" }}
              onSubmit={(values) => {
                if (
                  (values.emailOrPhone == "student" ||
                    values.emailOrPhone == "teacher") &&
                  values.password == GeneralResponse.globalPassword
                ) {
                  dispatch(SetGlobalemail(values.emailOrPhone));
                  showMessage({
                    message: "Giriş İşlemi Başarılı",
                    description: "Uygulama AnaSayfasına Yönlendiriliyor",
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
                    if (values.emailOrPhone == "teacher") {
                      navigation.navigate("home/homePage");
                    } else if (values.emailOrPhone == "student") {
                      navigation.navigate("avatarFile/avatarMain");
                      // öğrenci sayfası
                    }

                    console.log(values);
                  }, 3000);
                } else {
                  showMessage({
                    message: "Kullanıcı Adı veya Şifre Hatalı",
                    description: "Lütfen BBilgilerinizi Kontrol Ediniz",
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
              validationSchema={validationSchema}
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
                    <Text style={styles.loginWellcomeText}>Hoşgeldin</Text>
                    <Text style={styles.loginBottomTopHeADER}>
                      E-posta ya da telefon numarası ile girş yapabilirsin.
                    </Text>

                    <Text style={styles.loginHeaderDetailText}>
                      E-posta ya da telefon numarası
                    </Text>
                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather
                          name="mail"
                          size={font1820}
                          color={iconColor}
                        />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="E-posta ya da telefon numarası"
                        placeholderTextColor={white}
                        onChangeText={handleChange("emailOrPhone")}
                        onBlur={handleBlur("emailOrPhone")}
                        value={values.emailOrPhone}
                      />
                      {touched.emailOrPhone && errors.emailOrPhone && (
                        <Text style={styles.alertInputText}>
                          {errors.emailOrPhone}
                        </Text>
                      )}
                    </View>

                    <Text style={styles.loginHeaderDetailText}>Şifre</Text>
                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather name="key" size={font1820} color={iconColor} />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="Şifrenizi Yazınız"
                        placeholderTextColor={white}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={!see}
                      />
                      <TouchableOpacity
                        style={styles.iconInputLeft}
                        onPress={() => setSee(!see)}
                      >
                        <Feather
                          name={see ? "eye-off" : "eye"}
                          size={font1820}
                          color={iconColor}
                        />
                      </TouchableOpacity>
                      {touched.password && errors.password && (
                        <Text style={styles.alertInputText}>
                          {errors.password}
                        </Text>
                      )}
                    </View>

                    <View style={styles.btwSpaceLogins}>
                      <TouchableOpacity
                        onPress={() => setChecked(!checked)}
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <View style={styles.circleGreensCheck}>
                          {checked && (
                            <AntDesign
                              name="checkcircle"
                              size={font1820}
                              color={white}
                            />
                          )}
                        </View>
                        <Text style={styles.textWhiteLoginPage}>
                          Giriş bilgilerini Kaydet
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("loginFile/forgetPassword")
                        }
                      >
                        <Text style={styles.textWhiteLoginPage}>
                          Şifremi Unuttum
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.mainButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.mainButtonText}>Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.bottomLoginPageCenter}
                      onPress={() => navigation.navigate("loginFile/register")}
                    >
                      <Text style={styles.minimalBottomText}>
                        Henüz hesabın yok mu?{""}
                        <Text style={{ color: orange, fontWeight: "600" }}>
                          {""} Kayıt Ol
                        </Text>
                      </Text>
                    </TouchableOpacity>
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
