import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import RequestLogin from './requestLogin';
import CreateAccount from './CreateAccount';
import FillProfile from './FillProfile';

export default function AuthenticationRoutes() {
  const stack = createStackNavigator()
  const springAnimation = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <stack.Navigator
      initialRouteName='Signin-Signup'
      screenOptions={{
        gestureEnabled: "true",
        title: null,
        
      }}
    >
      <stack.Screen
        name="Signin-Signup"
        component={RequestLogin}
        options={{
          transitionSpec: {
            open: springAnimation,
            close:springAnimation
          },
          headerShown:false
          
        }}

      />
      <stack.Screen name="create-account" component={CreateAccount} options={{}} />
      <stack.Screen name="create-profile" component={FillProfile}  />
      <stack.Screen name="login" component={Login} />

    </stack.Navigator>
  )
}

const styles = StyleSheet.create({})