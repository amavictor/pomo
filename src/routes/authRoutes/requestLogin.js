import { Platform, StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from '../../components/Button'
import { Image } from 'react-native'
import Facebook from "../../../assets/images/facebook.png"
import Google from "../../../assets/images/google.png"
import Apple from "../../../assets/images/apple.png"
import { colors } from './../../utils/colors';
import { text } from './../../utils/text';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'

export default function RequestLogin() {
  const navigation = useNavigation()
  console.log("pop", navigation)
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={[styles.intro]}>Get started today!</Text>
          <Button
            type={"border"}
            image={Facebook}
          >
            Continue with Facebook
          </Button>
          <Button
            type={"border"}
            image={Google}
          >
            Continue with Google
          </Button>
          {
            Platform.OS === "ios" &&
            <Button
              type={"border"}
              image={Apple}
            >
              Continue with Apple
            </Button>
          }

        </View>
        <View style={styles.secondSection}>
          <View style={styles.lineSection}>
            <View style={styles.line} />
            <Text>Or</Text>
            <View style={styles.line} />
          </View>
          <Button>Sign in with password</Button>
        </View>
        <View style={styles.signupRequest}>
          <Pressable
            onPress={() =>
              // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              navigation.navigate("create-account")
            }>
            <Text style={styles.signUpRequestText}>Don't have an account? <Text
              style={styles.signUp}
            >
              Sign up
            </Text>
            </Text>
          </Pressable>

        </View>
      </SafeAreaView>

    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white
  },
  mainContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "space-between"
  },
  intro: {
    fontFamily: "std",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color: colors.black
  },

  secondSection: {
    flex: 0.1,
    alignItems: "center",
    marginTop: 20,
  },
  lineSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  line: {
    height: 1,
    width: 155,
    marginHorizontal: 10,
    backgroundColor: colors.blackLightBorder
  },
  signupRequest: {
    marginTop: 50
  },
  signUpRequestText: {
    fontFamily: text.m.fontFamily,
    color: colors.gray,
  },
  signUp: {
    color: colors.orange,
    fontSize: 14,
  }

})