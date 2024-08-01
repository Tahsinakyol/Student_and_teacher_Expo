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
import { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as yup from "yup";
import { showMessage } from "react-native-flash-message";
import { useSelector, useDispatch } from "react-redux";
export default function NewPassword() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [see, setSee] = useState(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector((state) => state);
  const validationSchema = yup.object().shape({
    newpassword: yup.string().required("Şifre gereklidir."),
    newpasswordAgain: yup.string().required("Şifre gereklidir."),
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
              initialValues={{ newpassword: "", newpasswordAgain: "" }}
              onSubmit={(values) => {
                if (values.newpassword == values.newpasswordAgain) {
                  showMessage({
                    message: "Başarılı !",
                    description: "Şifre Değiştirme İşlemi Başarılı",
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
                    navigation.navigate("loginFile/login");

                    console.log(values);
                  }, 3000);
                } else {
                  showMessage({
                    message: "Şifreler Aynı Değil",
                    description: "Lütfen Şifreleri Kontrol Ediniz",
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
                      gap: 15,
                    }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Text style={styles.loginWellcomeText}>
                      Yeni Şifre Oluştur
                    </Text>
                    <Text style={styles.loginBottomTopHeADER}>
                      Yeni Şifrenizi Oluşturun
                    </Text>

                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather name="key" size={font1820} color={iconColor} />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="Şifrenizi Yazınız"
                        placeholderTextColor={white}
                        onChangeText={handleChange("newpassword")}
                        onBlur={handleBlur("newpassword")}
                        value={values.newpassword}
                        secureTextEntry={true}
                      />

                      {touched.newpassword && errors.newpassword && (
                        <Text style={styles.alertInputText}>
                          {errors.newpassword}
                        </Text>
                      )}
                    </View>
                    <View style={styles.loginInputMain}>
                      <View style={styles.iconInputLeft}>
                        <Feather name="key" size={font1820} color={iconColor} />
                      </View>
                      <TextInput
                        style={styles.inputLoginFileIn}
                        placeholder="Şifrenizi Tekrar Yazınız"
                        placeholderTextColor={white}
                        onChangeText={handleChange("newpasswordAgain")}
                        onBlur={handleBlur("newpasswordAgain")}
                        value={values.newpasswordAgain}
                        secureTextEntry={true}
                      />

                      {touched.newpasswordAgain && errors.newpasswordAgain && (
                        <Text style={styles.alertInputText}>
                          {errors.newpasswordAgain}
                        </Text>
                      )}
                    </View>

                    <TouchableOpacity
                      style={styles.mainButton}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.mainButtonText}>
                        Yeni Şifreyi Kaydet
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
