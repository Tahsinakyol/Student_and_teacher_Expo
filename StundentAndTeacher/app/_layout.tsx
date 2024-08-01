import { Stack } from "expo-router";
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux";
import FlashMessage from "react-native-flash-message";
import { NativeBaseProvider } from "native-base";
export default function Layout() {
  type typeRooter = {
    navigate: any;
  };
  const navigation = useNavigation<typeRooter>();

  const store = createStore(reducers);
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="light" />
      <FlashMessage style={{ paddingTop: insets.top }} position="top" />
      <NativeBaseProvider>
        <Provider store={store}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </Provider>
      </NativeBaseProvider>
    </>
  );
}
