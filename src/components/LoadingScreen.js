import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function LoadingScreen({ navigation }) {
  const translateY1 = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Result');
    }, 3000); // 3초 후에 이동

    const animateDots = () => {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(translateY1, {
              toValue: -10,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(translateY1, {
              toValue: 0,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(translateY2, {
              toValue: 10,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(translateY2, {
              toValue: 0,
              duration: 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    };

    animateDots();

    return () => {
      clearTimeout(timer);
    };
  }, [navigation, translateY1, translateY2]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
      <View style={styles.dotsContainer}>
        <Animated.Text
          style={[styles.dot, { transform: [{ translateY: translateY1 }] }]}
        >
          .
        </Animated.Text>
        <Animated.Text
          style={[styles.dot, { transform: [{ translateY: translateY2 }] }]}
        >
          .
        </Animated.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    fontSize: 60,
    color: 'white',
    paddingHorizontal: 5,
  },
});