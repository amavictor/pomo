import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { FlatList } from 'react-native';
import { Text, View, StyleSheet, Animated } from 'react-native'
import { slides } from '../../onboardingSlides'
import OnboardingItem from './onboardingItem';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Paginator from './paginator';

export const Onboarding = () => {
  const [currentIndex, setCurremtIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const slidesRef = useRef(null)

  //This viewable items finction is to track the index of the scrolled items
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurremtIndex(viewableItems[0].index)
  }).current
  //this says that the screen has to be 50% view before it can change
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 })
    }
    else {
      try {
        await AsyncStorage.setItem('@viewedOnboarding')
      } catch (e) {
        console.log('Error @setItmes:', console.log(e))
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          viewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ],
            {
              useNativeDriver: false
            })}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    flex: 3
  }
});