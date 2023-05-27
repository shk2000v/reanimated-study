import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Button } from '../../atom/Button/Button';

const Home = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });
  return (
    <SafeAreaView style={[styles.flex]}>
      <Text>Home Screen</Text>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => {
            offset.value = withSpring(Math.random() * 255);
          }}>
          withSpring
        </Button>
        <Button
          onPress={() => {
            offset.value = withTiming(Math.random() * 255);
          }}>
          withTiming
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  default: {},
  flex: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#2e2e',
  },
});
