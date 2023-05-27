import { SafeAreaView, StyleSheet } from 'react-native';
import Text from '../../atom/Text/Text';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import { WIDTH } from '../../constants';

const Event = () => {
  const pressed = useSharedValue(false);
  const startingPosition = 100;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive(event, ctx) {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      // transform: [{ scale: withSpring(pressed.value ? 1.2 : 1) }],
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

  return (
    <SafeAreaView style={[styles.flex, styles.pd20]}>
      <Text>Evnet</Text>

      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View style={[styles.ball, uas]} />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default Event;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  pd20: {
    padding: 20 * WIDTH,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});
