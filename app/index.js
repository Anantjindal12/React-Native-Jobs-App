import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello, Chirag Bhai</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
