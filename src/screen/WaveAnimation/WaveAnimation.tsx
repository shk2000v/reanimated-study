import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Text from '../../atom/Text/Text';
import { Path, Svg } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Button } from '../../atom/Button/Button';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const WaveAnimation = () => {
  const c1y = useSharedValue(0.2);
  const c2y = useSharedValue(0.8);

  const SIZE = 100;

  const d = [
    'M 0 0.5',
    `C 0.3 ${c1y.value}, 0.7 ${c2y.value}, 1 0.5`,
    'V 1',
    'H 0',
  ].join(' ');
  const animatedProps = useAnimatedProps(() => {
    return {
      d: [
        'M 0 0.5',
        `C 0.3 ${c1y.value}, 0.7 ${c2y.value}, 1 0.5`,
        'V 1',
        'H 0',
      ].join(' '),
    };
  });

  const handleWave = () => {
    c1y.value = withRepeat(withTiming(0.8, { duration: 500 }), -1, true);
    c2y.value = withDelay(
      200,
      withRepeat(withTiming(0.2, { duration: 500 }), -1, true),
    );
  };

  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <Text>WaveAnimation screen</Text>
      <View style={styles.center}>
        <Button onPress={handleWave}>웨이브</Button>

        <Svg style={{ width: SIZE, height: SIZE }} viewBox="0 0 1 1">
          <AnimatedPath animatedProps={animatedProps} d={d} fill={'#1F5E9D'} />
        </Svg>
      </View>
    </SafeAreaView>
  );
};

export default WaveAnimation;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
