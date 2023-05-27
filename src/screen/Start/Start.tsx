import { StyleSheet, View } from 'react-native';
import Text from '../../atom/Text/Text';
import { Button } from '../../atom/Button/Button';
import { WIDTH } from '../../constants';

const Start = ({ navigation }) => {
  return (
    <View style={styles.pd20}>
      <Text>Start Screen</Text>
      <View style={styles.mv20}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Home')}>Home</Button>
      </View>
      <View style={styles.mv20}>
        <Text>Event Screen</Text>
        <Button onPress={() => navigation.navigate('Event')}>
          Event Screen
        </Button>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  pd20: {
    padding: 20 * WIDTH,
  },
  mv20: {
    paddingVertical: 20 * WIDTH,
  },
});
