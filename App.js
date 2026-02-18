import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RoleToggleScreen from "./src/screens/RoleToggleScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import { ThemeProvider } from "./src/context/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="RoleToggle" component={RoleToggleScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
