import { StyleSheet, Text, useWindowDimensions, View, Animated } from 'react-native'
import React from 'react'
import { colors } from './../utils/colors';


export default function Paginator({ data, scrollX }) {
    const {width} = useWindowDimensions()
  return (
    <View style={styles.pagination}>
          {
              data.map((_, i) => {
                  const inputRange = [(i - 1) * width, 1 * width, (i + 1) * width]
                  const dotWidth = scrollX.interpolate({
                      inputRange,
                      outputRange: [10, 25, 10],
                      extrapolate:'clamp'
                  })
                  const opacity = scrollX.interpolate({
                      inputRange,
                      outputRange: [0.3, 1, 0.3],
                      extrapolate:"clamp"
                  })
                  return <Animated.View style={[styles.dot, {width:dotWidth,opacity}]} key={i.toString()}/>
              })
      }
    </View>
  )
}

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        height:64
    },
    dot: {
        height: 10,
        borderRadius:5,
        backgroundColor: colors.orange,
        marginHorizontal: 13,
        width:10
    }
})