import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import styles from "../assets/styles/App.style";
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
} from "../assets/styles/colors";
import { Image, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigation.navigate("loginFile/login");
    }, 1000);

    return () => clearTimeout(redirectTimeout);
  }, [navigation]);

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
      <View style={{ width: "100%", alignItems: "center" }}>
        <Image
          style={styles.logoCenterImagesSplash}
          source={require("../assets/images/system/logo.png")}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
}
