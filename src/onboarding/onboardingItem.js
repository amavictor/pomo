import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native';
import { colors } from './../utils/colors';

export default function OnboardingItem({ item }) {
    const { width } = useWindowDimensions()
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]} />
            <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
        paddingHorizontal: 20
    },
    image: {
        flex: 0.5,
        justifyContent: "center"
    },
    title: {
        fontWeight: "800",
        fontSize: 24,
        color: colors.blue,
        fontFamily: "std",
        textAlign: "center",
    },
    description: {
        fontWeight: "800",
        fontSize: 14,
        color: colors.gray,
        fontFamily: "std",
        textAlign: "center",
        marginVertical:20
    }
});