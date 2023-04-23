import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>پروفایل</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.card.button}>
                    test
                </Text>
                <Button
                    style={styles.card.button}
                    onPress={() => {
                        alert(123)
                    }}
                    title="click me"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95c575',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#d0ff98',
        padding: 10,
        borderColor: 'silver',
        borderWidth: 1,
    },
    card: {
        width: '80%',
        height: '90%',
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: 8,

        shadowColor: "#666666",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity:  0.17,
        shadowRadius: 8,
        elevation: 3,

        button: {
            margin: 10,
            width: 'auto',
            color: 'red',
            backgroundColor: 'yellow'
        }
    }

});
