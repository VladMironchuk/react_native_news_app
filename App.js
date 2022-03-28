import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import MainStack from "./navigate";

const fonts = () =>
  Font.loadAsync({
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  return font ? (
    <MainStack />
  ) : (
    <AppLoading
      startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={console.warn}
    />
  );
}
