import {Button, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Text>صفحه اصلی</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('about')}
                // onPress={() => navigation.push('home')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
