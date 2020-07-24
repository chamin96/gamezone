import * as Font from "expo-font";
import React, { useState } from "react";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
    "ranchers-regular": require("./assets/fonts/Ranchers/Ranchers-Regular.ttf")
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
