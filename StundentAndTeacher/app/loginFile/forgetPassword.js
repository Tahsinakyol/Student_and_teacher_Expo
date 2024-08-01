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
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";

export default function ForgetPassword() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const validationSchema = yup.object().shape({
    emailOrPhone: yup.string().required("Boş Bırakılmaz"),
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
              initialValues={{ emailOrPhone: "" }}
              onSubmit={(values) => {
                if (
                  values.emailOrPhone == "student" ||
                  values.emailOrPhone == "teacher"
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
                    navigation.navigate("loginFile/codePage");

                    console.log(values);
                  }, 3000);
                } else {
                  showMessage({
                    message: "E-posta veya Telefon Numarası Yanlış",
                    description: "Lütfen Bilgilerinizi Kontrol Ediniz",
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
                    <Text style={styles.loginWellcomeText}>
                      Şifremi Unuttum
                    </Text>
                    <Text style={styles.loginBottomTopHeADER}>
                      E-posta Adresinizi Yazınız
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

                    <TouchableOpacity
                      style={[styles.mainButton, { marginTop: 15 }]}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.mainButtonText}>Gönder</Text>
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
