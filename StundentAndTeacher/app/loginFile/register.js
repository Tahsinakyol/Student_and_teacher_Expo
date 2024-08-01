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
import { Formik } from "formik";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";
import { AntDesign } from "@expo/vector-icons";
export default function Register() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [see, setSee] = useState(false);
  const [registerTbs, setRegisterTbs] = useState(1);

  const validationSchema = yup.object().shape({
    nameSurname: yup.string().required("İsim Soyissim gereklidir."),
    registeMail: yup.string().required("E-posta gereklidir."),
    registerPhone: yup.string().required("Telefon Numarası gereklidir."),
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
              initialValues={{
                nameSurname: "",
                registeMail: "",
                registerPhone: "",
                password: "",
              }}
              onSubmit={(values) => {
                showMessage({
                  message: "Kayıt Olma İşlemi Başarılı",
                  description: "Giriş Yap Sayfasına Yönlendiriliyor",
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
                  console.log(values);
                  navigation.navigate("loginFile/login");
                }, 3000);
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
                      gap: 15,
                    }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Text style={styles.loginWellcomeText}>Kayıt Ol</Text>
                    <Text
                      style={[styles.loginBottomTopHeADER, { marginBottom: 0 }]}
                    >
                      Yeni bir üyelik hesabı oluşturun
                    </Text>
                    <View style={styles.registerTabMenu}>
                      <TouchableOpacity
                        style={
                          registerTbs == 1
                            ? styles.activeRegisterTabMenu
                            : styles.pasiveRegisterTbs
                        }
                        onPress={() => setRegisterTbs(1)}
                      >
                        <Text
                          style={
                            registerTbs == 1
                              ? styles.activeResgiterBtnText
                              : [styles.activeResgiterBtnText, { opacity: 0.5 }]
                          }
                        >
                          Eğitmen
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={
                          registerTbs == 2
                            ? styles.activeRegisterTabMenu
                            : styles.pasiveRegisterTbs
                        }
                        onPress={() => setRegisterTbs(2)}
                      >
                        <Text
                          style={
                            registerTbs == 2
                              ? styles.activeResgiterBtnText
                              : [styles.activeResgiterBtnText, { opacity: 0.5 }]
                          }
                        >
                          Öğrenci
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather
                          name="user"
                          size={font1820}
                          color={iconColor}
                        />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="İsim Soyisim"
                        placeholderTextColor={white}
                        onChangeText={handleChange("nameSurname")}
                        onBlur={handleBlur("nameSurname")}
                        value={values.nameSurname}
                      />
                      {touched.nameSurname && errors.nameSurname && (
                        <Text style={styles.alertInputText}>
                          {errors.nameSurname}
                        </Text>
                      )}
                    </View>

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
                        placeholder="E-posta Adresi"
                        placeholderTextColor={white}
                        onChangeText={handleChange("registeMail")}
                        onBlur={handleBlur("registeMail")}
                        value={values.registeMail}
                        keyboardType="email-address"
                      />
                      {touched.registeMail && errors.registeMail && (
                        <Text style={styles.alertInputText}>
                          {errors.registeMail}
                        </Text>
                      )}
                    </View>

                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather
                          name="phone"
                          size={font1820}
                          color={iconColor}
                        />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="Telefon Numarası"
                        placeholderTextColor={white}
                        onChangeText={handleChange("registerPhone")}
                        onBlur={handleBlur("registerPhone")}
                        value={values.registerPhone}
                        keyboardType="numeric"
                      />
                      {touched.registerPhone && errors.registerPhone && (
                        <Text style={styles.alertInputText}>
                          {errors.registerPhone}
                        </Text>
                      )}
                    </View>

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
                      {touched.password && errors.password && (
                        <Text style={styles.alertInputText}>
                          {errors.password}
                        </Text>
                      )}
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
                    </View>

                    <TouchableOpacity
                      style={styles.mainButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.mainButtonText}>Kayıt Ol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.bottomLoginPageCenter}
                      onPress={() => navigation.navigate("loginFile/login")}
                    >
                      <Text style={styles.minimalBottomText}>
                        Hesabın var mı ? {""}
                        <Text style={{ color: orange, fontWeight: "600" }}>
                          {""}Giriş Yap
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
