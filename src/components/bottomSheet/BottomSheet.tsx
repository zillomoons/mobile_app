import { StyleSheet, View, Dimensions } from 'react-native';
import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type BottomSheetProps = {
  children?: React.ReactNode;
};
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ children }, ref) => {
    const { height } = Dimensions.get('window');
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });
    const MAX_TRANSLATE_Y = -height + 50;

    const scrollTo = useCallback((destination: number) => {
      'worklet';
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]);
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value };
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -height / 4) {
          scrollTo(0);
        } else if (translateY.value < -height / 1.5) {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    useEffect(() => {
      scrollTo(-height / 3);
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
        [25, 5],
        Extrapolate.CLAMP
      );
      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          <View style={styles.line} />
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  line: {
    width: 60,
    height: 4,
    backgroundColor: '#CFD2CF',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
