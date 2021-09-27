import React, { useRef } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

function FadeInView({ children, startAnim /*isSpring = false*/ }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(0.3)).current;

  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const spring = () => {
    Animated.spring(springAnim, {
      toValue: windowWidth / 2,
      friction: 5.5,
      useNativeDriver: true,
    }).start();
  };

  const fadeAndSpring = () => {
    fadeInOut();
    spring();
  };
  startAnim ? fadeAndSpring() : null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateX: springAnim }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: windowWidth / 2,
  },
});

export default FadeInView;
