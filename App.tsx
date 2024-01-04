import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb53f']}  style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/purple-pictures-zvo912urb2ectn70.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgrouImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb53f'
  },
  backgrouImage: {
    opacity :0.15
  }
});
