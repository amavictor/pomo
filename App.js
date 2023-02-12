import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Onboarding } from './src/onboarding/onboarding';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { Home } from './src/pages/home';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AuthenticationRoutes from './src/routes/authRoutes/authenticationRoutes';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  const [loading, setLoading] = useState(true)
  const [viewOnboarding, setViewOnboarding] = useState(false)
  useEffect(() => {
    checkOnboarding
  },[])
  const Loading = () => {
    return (
      <View>
      <ActivityIndicator size={"large"}/>
    </View>
    )
  
  }
  
  const [loaded] = useFonts({
    std: require('./assets/fonts/circular-std-medium-500.ttf')
  })
  if (!loaded) {
    return null
  }

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewOnbarding')
      if (value !== null) {
        setViewOnboarding(true)
      }
    }
    catch(e) {
      console.log('Error @checkOnboarding:', e)
    }
    finally {
      setLoading(false)
    }
  }

 
  return (
    <>
       {/* {loading ?<Loading/> : viewOnboarding ? <Home/> : <Onboarding/>} */}
     
      {/* <StatusBar style="auto" /> */}
      <NavigationContainer>
        <AuthenticationRoutes/>
      </NavigationContainer>
    </>

     
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
