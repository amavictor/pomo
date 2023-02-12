import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from './../utils/colors';
import { useWindowDimensions } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import {ScaledSheet,s,vs} from "react-native-size-matters"
import * as Haptics from 'expo-haptics';
export const Button = ({ children, type,image, style, ...otherProps }) => {
    const { width, height } = useWindowDimensions()
    return (
        <>
            {
                type === "border" ?
                    <TouchableOpacity
                        {...otherProps}
                        style={[styles.borderButton,style]}
                        activeOpacity={0.5}
                        onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                    >
                        {image ? <Image source={image} style={ styles.socialLogo} /> : null}
                        <Text style={styles.borderText}>
                            {children}
                        </Text>

                    </TouchableOpacity>
                    :

                    <TouchableOpacity
                        {...otherProps}
                        style={[styles.button, styles.iosShadow, style]}
                        activeOpacity={0.8}           
                       
                    >
                        <Text style={styles.text}>
                            {children}
                        </Text>

                    </TouchableOpacity>
            }
        </>

    )
}

const styles = ScaledSheet.create({
    button: {
        width: "330@ms",
        height: "50@vs",
        backgroundColor: colors.orange,
        borderRadius: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        elevation: "20@vs",
        shadowColor:colors.orange
    },
    iosShadow: {
        shadowColor: colors.orange,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    borderButton: {
        borderColor: colors.blackLightBorder,
        borderWidth: 2,
        borderStyle: "solid",
        width: "330@s",
        height: "50@vs",
        padding:"10@ms",
        borderRadius: "20@ms",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"row"

    },
    text: {
        color: colors.white,
        alignSelf: "center",
        fontWeight: "500",
        fontSize: "16@s",
        fontFamily:"std"
    },
    borderText: {
        color: colors.black,
        alignSelf: "center",
        fontWeight: "500",
        fontSize: "16@s",
        
    },
    socialLogo: {
        width: "20@s",
        height: "20@vs",
        marginRight:"20@ms",
      },
})