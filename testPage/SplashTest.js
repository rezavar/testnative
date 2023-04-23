import { SafeAreaView, StatusBar, Text} from 'react-native';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useCallback, useEffect, useState} from "react";

SplashScreen.preventAutoHideAsync();

export default function SplashTest() {
    const [appIsReady, setAppIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'IranSans': require('../assets/fonts/IRANSans.ttf'),
    });


    useEffect(() => {
        async function prepare() {
            try {
                // load source
                // تا زمان اتمام لود صفحه اسپلش نمایش داده میشود
                await new Promise(resolve => setTimeout(resolve, 10000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onLayout={onLayoutRootView} >
                <StatusBar hidden={true}/>
                <Text style={{fontFamily:'IranSans'}} >بررسی فونت صفحه اصلی</Text>
                <Text  >بررسی فونت صفحه اصلی</Text>
            </SafeAreaView>
        </>

    );
}

