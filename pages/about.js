import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>درباره ما</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cba196',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
