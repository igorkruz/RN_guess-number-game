import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import { StartGameScreen } from './screens/StartGameScreen';

export default function App() {
  const [usersNumber, setUsersNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickeNumberHandler = (number: number| null) => {
    setUsersNumber(number);
  }

  const handleGameOver = () => {
    setGameIsOver(true);
  }

  const handleRestartGame = () => {
    setUsersNumber(null);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickeNumberHandler} />

  if (usersNumber) {
    screen = <GameScreen userNumber={usersNumber} onGameOver={handleGameOver}/>
  }

  if (gameIsOver && usersNumber ) {
    screen = <GameOverScreen handleRestartGame={handleRestartGame} userNumber={usersNumber}/>
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
  },
  backgrouImage: {
    opacity :0.15
  }
});
