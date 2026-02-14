import { Colors } from "@/constants/Colors";
import { ActivityIndicator, useColorScheme } from "react-native"

const ThemedLoader = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme ? Colors[colorScheme] : Colors.light;

  return (
    <ActivityIndicator size="large" color={theme.text} />
  )
}

export default ThemedLoader