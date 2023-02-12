import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native'
import { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import AuthInput from '../../components/authInput'
import { text } from './../../utils/text';
import { colors } from './../../utils/colors';
import { Button } from '../../components/Button';
import { ScrollView, Dimensions } from 'react-native';
import {ScaledSheet} from "react-native-size-matters"
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {
  const { height, width } = Dimensions.get("window")
  const navigation = useNavigation()
  const [authInputs, onChangeAuthInputs] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <ScrollView
          keyboardDismissMode='on-drag'
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.createAccount}>Create Your Account</Text>
          <View style={styles.inputView}>
            <AuthInput
              placeholder={"Email"}
              type="email-address"
              value={authInputs.email}
              onChangeValue={onChangeAuthInputs}
              style={styles.input}
            />
            <AuthInput
              placeholder={"Password"}
              type="password"
              value={authInputs.password}
              onChangeValue={onChangeAuthInputs}
              style={styles.input}

            />
            <AuthInput
              placeholder={"Confirm password"}
              type="password"
              value={authInputs.confirmPassword}
              onChangeValue={onChangeAuthInputs}
              style={styles.input}
            />
          </View>

          <View style={styles.button}>
            <Button
              onPress={()=>navigation.navigate("create-profile")}
            >Sign up</Button>
          </View>


          <View style={styles.lineSection}>
            <View style={styles.line} />
            <Text style={styles.already}>Or continue with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.socialsContainer}>
            <TouchableOpacity
              style={styles.socials}
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            >
              <Image
                source={require("../../../assets/images/facebook.png")}
                style={styles.icons}
                resizeMode={"contain"}
          
                />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socials}
              onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            >
              <Image
                source={require("../../../assets/images/google.png")}
                style={styles.icons}
                resizeMode={"contain"}
      

              />
            </TouchableOpacity>
            {
              Platform.OS === "ios" &&
              <TouchableOpacity
                  style={styles.socials}
                  onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
              >
                <Image
                  source={require("../../../assets/images/apple.png")}
                  style={styles.icons}
                />
              </TouchableOpacity>
            }
          </View>

          <View style={styles.singedUp}>
            <Text style={styles.already}>Already have an account? <Text style={styles.signUp}>Sign in</Text></Text>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>


    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.white,
    paddingHorizontal:"20@ms",
    alignItems: "center",
  },
  createAccount: {
    fontFamily: text.xl.fontFamily,
    fontSize: text.xl.fontSize,
    fontWeight: text.xl.fontWeight,
    color: colors.black,
  },
  lineSection: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "30@ms",
    alignSelf: "center"
  },
  line: {
    height: "1@ms",
    width: "155@ms",
    marginHorizontal: "10@ms",
    backgroundColor: colors.blackLightBorder
  },
  inputView: {
    flex: 0.3,
    alignItems: "center",
    marginVertical:"10@ms",
  },
  icons: {
    width: "20@s",
    height: "20@vs"
  },
  input: {
    marginVertical: "10@ms",
  },
  button: {
    alignItems: "center"
  },
  socials: {
    width: "50@s",
    height: "50@vs",
    borderColor: colors.blackLightBorder,
    borderStyle: "solid",
    borderWidth: "2@ms",
    alignItems: "center",
    justifyContent: "center",
    padding: "10@ms",
    borderRadius: "10@ms",
    marginHorizontal:"20@ms"
  },
  socialsContainer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop:"20@ms"
  },
  singedUp: {
    marginTop: "20@s",
    alignSelf:"center"
  },
  signUp: {
    color: colors.orange,
    fontSize: 14,
    fontFamily:text.m.fontFamily
  },
  already: {
    fontFamily: text.m.fontFamily,
    fontWeight: "normal",
    color:colors.black
  }
  
})