import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native"; // Removida a duplicação de ScrollView

export default function Tab2() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tab 2</Text>
            <Text style={styles.subtitle}>
                Abaixo, uma fotinha da nossa queridinha Catherine de The Vampire Diaries.
                {"\n"}Essa página é dedicada a todos os fãs da série!{"\n"}
            </Text>

            <Image
                source={{
                    uri: "https://i.pinimg.com/736x/e7/e1/c8/e7e1c80c55f0898b193c97e431aaaebe.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.description}>
                Essa página é destinada a usuários que 💖 Catherine de The Vampire Diaries.
            </Text>

            <Text style={styles.footer}>Fort abraço! 🚀🌍</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "lightgray",
        marginBottom: 20,
        textAlign: "center",
        paddingHorizontal: 10,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    footer: {
        fontSize: 16,
        fontWeight: "bold",
        color: "gold",
        marginTop: 20,
    },
});
