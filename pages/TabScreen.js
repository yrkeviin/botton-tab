import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TabScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Página Tab</Text>
            <Text style={styles.subtitle}>
                Navegue para a próxima página para poder ver a Catherine!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        paddingHorizontal: 15,
    },
});
