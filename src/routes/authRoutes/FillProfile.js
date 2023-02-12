import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import { ScrollView, Dimensions } from 'react-native';
import { Image } from 'react-native';
import AuthInput from '../../components/authInput';
import { Button } from '../../components/Button';
import { text } from './../../utils/text';
import {AntDesign} from "@expo/vector-icons"
import { colors } from './../../utils/colors';




const {width,height} = Dimensions.get("window")
export default function FillProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Fill your profile</Text>
          <Text style={styles.textBody}>Don't worry, you can always change it later, or you can skip it for now</Text>
        </View>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Image
              style={styles.avatarImage}
              source={require("../../../assets/images/user.png")}
              resizeMode={"contain"}
            />
            <Image
              style={styles.avatarEdit}
              source={require("../../../assets/images/pen.png")}
              resizeMode={"contain"}
            />
            
          </View>
        </View>
        <View>
          <AuthInput
            placeholder={"Full name"}
            style={styles.input}
          />
            <AuthInput
            placeholder={"Nick name"}
            style={styles.input}
          />
          
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonProfile1}>Skip</Button>
          <Button style={styles.buttonProfile2}>Start</Button>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: "20@ms",
    backgroundColor:"white"
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:"space-between"
    
  },
  buttonProfile1: {        
    width: "120@s",
    backgroundColor: colors.washedOrangeButton,
    color:colors.orange
  },
  buttonProfile2: {
    width: "120@s",

  },
  textContainer: {
    flex: 0.25,
  },
  text: {
    fontSize: text.l.fontSize,
    fontWeight: text.l.fontWeight,
    fontFamily: text.l.fontFamily,
    alignSelf: "center",
    marginVertical: "20@s",
    color:colors.black
  },
  textBody: {
    fontSize: text.m.fontSize,
    fontWeight: text.m.fontWeight,
    fontFamily: text.m.fontFamily,
    textAlign: "center",
    color:colors.black

  },
  avatarContainer: {
    flex: 0.25,
  },
  avatar: {
    position: "relative",
    padding: "20@s",
    alignSelf: "center",
    marginVertical:"30@vs"
  },
  avatarImage: {
    width:"100@s",
    height:"100@vs"
  },

  avatarEdit: {
    width: "25@s",
    height: "25@vs",
    position: "absolute",
    bottom: 20,
    left:104
  },
  input: {
    marginVertical:"10@s"
  }
})