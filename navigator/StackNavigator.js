import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/home";
import Profile from "../pages/profile";
import About from "../pages/about";

export default function StackNavigator() {
    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator>
                <Stack.Screen name="profile" component={Profile} />
                <Stack.Screen name="home" component={Home} />

                <Stack.Screen name="about" component={About} />
            </Stack.Navigator>
    );
}
