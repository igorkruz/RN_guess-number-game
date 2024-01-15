import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {
  const [usersNumber, setUsersNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(false)

  const pickeNumberHandler = (number: number) => {
    setUsersNumber(number)
  }

  const handleGameOver = () => {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickeNumberHandler} />

  if (usersNumber) {
    screen = <GameScreen userNumber={usersNumber} onGameOver={handleGameOver}/>
  }

  if (gameIsOver) {
    screen = <GameOverScreen onGameOver={handleGameOver} />
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb53f']}  style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/purple-pictures-zvo912urb2ectn70.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgrouImage}
      >
        <SafeAreaView style={[styles.rootScreen, {marginTop: 54}]}>
          {screen}
        </SafeAreaView>
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
