import Svg, { Circle } from 'react-native-svg';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useLayoutEffect } from 'react';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({
  strokeWidth,
  radius,
  bgColor,
  percentageComplete,
}: CircularProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const invertedCompletion = (100 - percentageComplete) / 100;

  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
  const textOpacity = useSharedValue(0);

  const FADE_DELAY = 1500;
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(theta.value * innerRadius, {
        duration: FADE_DELAY,
      }),
    };
  });
  const powerTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(textOpacity.value, {
        duration: FADE_DELAY,
      }),
    };
  });

  const powerPercentTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(textOpacity.value, {
        duration: FADE_DELAY,
      }),
    };
  });
  const toggleAnimation = () => {
    if (!textOpacity.value) {
      theta.value = animateTo.value;
      textOpacity.value = 1;
    } else {
      theta.value = 2 * Math.PI * 1.001;
      textOpacity.value = 0;
    }
  };
  useEffect(() => {
    theta.value = animateTo.value;
    textOpacity.value = 1;
  }, [percentageComplete]);
  return (
    <View style={styles.ringContainer}>
      <Svg style={[StyleSheet.absoluteFill, styles.rotate]}>
        <AnimatedCircle
          animatedProps={animatedProps}
          cx={radius}
          cy={radius}
          r={innerRadius}
          fill={'transparent'}
          stroke={bgColor}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeWidth={strokeWidth}
          strokeDashoffset={2 * Math.PI * (innerRadius * 0.5)}
          strokeLinecap='round'
        />
      </Svg>
      <Animated.Text style={[styles.powerPercentage, powerPercentTextStyle]}>
        {percentageComplete} %
      </Animated.Text>
      <Animated.Text style={[styles.powerText, powerTextStyle]}>
        Battery Level
      </Animated.Text>
      {/* <Pressable onPress={toggleAnimation}>
        <Text style={{ color: bgColor, fontWeight: 'bold' }}>Animate!</Text>
      </Pressable> */}
    </View>
  );
};

type CircularProgressProps = {
  strokeWidth: number;
  radius: number;
  bgColor: string;
  percentageComplete: number;
};

const styles = StyleSheet.create({
  ringContainer: {
    alignSelf: 'center',
    width: 260,
    height: 260,
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  powerText: {
    fontSize: 24,
    fontWeight: '300',
    backgroundColor: 'white',
  },
  powerPercentage: {
    fontSize: 60,
    fontWeight: '600',
  },
  rotate: {
    transform: [{ rotate: '-90deg' }],
  },
});

export default CircularProgress;
