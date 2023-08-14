import Home from "./Home";
import Buy from "./Buy";
import Sell from "./Sell";
import NGO from "./NGO";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Results from "./Results";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Buy" component={Buy} />
        <Stack.Screen name="Sell" component={Sell} />
        <Stack.Screen name="NGO" component={NGO} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
