import { SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";

import { FontAwesome } from '@expo/vector-icons';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const IconM = createIconSetFromIcoMoon(
    require('../assets/fonts/icomoon.json'),
    'IcoMoon',
    'icomoon.ttf'
);


SplashScreen.preventAutoHideAsync();

export default function Icon() {

    const [iconLoaded] = useFonts({
        IcoMoon: require('../assets/fonts/icomoon.ttf'),
    });
    const [fontsLoaded] = useFonts({
        'IranSans': require('../assets/fonts/IRANSans.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded || !iconLoaded) {
        return null;
    }

    return (
        <>
            <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >
                <StatusBar hidden={true}/>
                <Text style={styles.redColor}>
                    آیکون عمومی
                    <FontAwesome name="question-circle-o" size={24}  />
                </Text>
                <Text style={styles.redColor}>
                    آیکون ایکومون
                    <IconM name="user" size={24} color="red" />
                </Text>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#333',
        borderBottomWidth: 1
    },
    redColor: {
        // fontFamily:'IranSans',
        color: 'red'
    }
});
