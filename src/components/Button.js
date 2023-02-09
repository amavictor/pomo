import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './../utils/colors';
import { useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';

export const Button = ({ children, type,image, ...otherProps }) => {
    const { width, height } = useWindowDimensions()
    return (
        <>
            {
                type === "border" ?
                    <TouchableOpacity
                        {...otherProps}
                        style={styles.borderButton}
                    >
                        {image ? <Image source={image} style={ styles.socialLogo} /> : null}
                        <Text style={styles.borderText}>
                            {children}
                        </Text>

                    </TouchableOpacity>
                    :

                    <TouchableOpacity
                         {...otherProps}
                        style={styles.button}
                       
                    >
                        <Text style={styles.text}>
                            {children}
                        </Text>

                    </TouchableOpacity>
            }
        </>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height: 50,
        backgroundColor: colors.orange,
        borderRadius: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    borderButton: {
        borderColor: colors.blackLightBorder,
        borderWidth: 2,
        borderStyle: "solid",
        width: 330,
        height: 50,
        padding:10,
        borderRadius: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row"

    },
    text: {
        color: colors.white,
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 16,
        fontFamily:"std"
    },
    borderText: {
        color: colors.black,
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 16,
    },
    socialLogo: {
        width: 20,
        height: 20,
        marginRight:20,
      },
})