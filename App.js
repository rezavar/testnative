import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
import {useCallback, useState} from "react";
import * as SplashScreen from "expo-splash-screen";





export default function App() {
    const [appIsReady, setAppIsReady] = useState(true);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady)
            return <>
                <View>
                    <Text>test</Text>
                </View>
            </>
    }, [appIsReady]);


    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={true}/>
                <Text>
                    اصلی
                </Text>
            </SafeAreaView>
            <NavigationContainer onReady={onLayoutRootView} >
                <StackNavigator style={styles.container}/>
            </NavigationContainer>


        </>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#333',
        borderBottomWidth: 1
    }
});
