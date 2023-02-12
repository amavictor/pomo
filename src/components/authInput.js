import { StyleSheet, Text, TextInput, View } from 'react-native'
import { React, useState } from 'react'
import { colors } from './../utils/colors';
import { text } from './../utils/text';
import { ScaledSheet } from 'react-native-size-matters';
import { useCallback } from 'react';


export default function AuthInput({ type, value, onChangeValue, icon, placeholder, style, ...otherProps }) {
    const [focused, setFocused] = useState()
    
    return (
        <View>
            <TextInput
                {...otherProps}
                style={focused ? [styles.input,style,styles.focused]:[styles.input,style]}
                keyboardType={type}
                clearButtonMode={"always"}
                placeholder={placeholder}
                value={value}
                secureTextEntry={type === 'password' ? true : false}
                onChangeText={onChangeValue}
                // placeholderTextColor={colors.orange}
                onFocus={() => setFocused(true)}
                onBlur={()=>setFocused(false)}
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    input: {
        width: "330@ms",
        height: "60@vs",
        backgroundColor: colors.whiteInput,
        borderRadius: "30@ms",
        alignItems: "center",
        padding: "20@ms",
        fontFamily: text.m.fontFamily,
        fontWeight: text.m.fontWeight,
        color: colors.black,
        fontSize:"16@ms"
    },
    focused: {
        borderColor: colors.orange,
        borderWidth: "1@ms",
        backgroundColor:colors.washedOrange
    }
})