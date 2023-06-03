import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fonts from "./constants/fonts/font";
import NavigationBar from "./components/NavigationBar";
import Navigation from "./components/AuthNavigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
