import { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton";

import { Ionicons } from '@expo/vector-icons'

const generateRandomNumber = (min: number, max: number, exclude: number): any => {
  const rndNumber = Math.floor(Math.random() * (max - min) + min)

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber
  }
}

interface Props {
  userNumber: number | null;
  onGameOver: () => void
}

let minBoundary = 1;
let maxBoundary = 100;
export const GameScreen:FC<Props> = ({ userNumber, onGameOver }) => {
  if (!userNumber) {
    return
  }

  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  const nextGuessHandler = (dirrection: 'lower' | 'greater') => {
    if ((dirrection === 'lower' && currentGuess < userNumber) || (dirrection === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Dont lie!', 'You know that this is wrong...', [{text: 'Sorry', style: 'cancel'}])
      return;
    }

    if (dirrection === 'lower') {
      maxBoundary = currentGuess;
    }

    if (dirrection === 'greater') {
      minBoundary = currentGuess + 1;
    }

    const newRnadomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRnadomNumber)
  }

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver()
    }
  }, [onGameOver, userNumber, currentGuess])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Opponents Guess
      </Text>

      <Text style={styles.title}>
        {currentGuess}
      </Text>

      <View>
        <PrimaryButtont icon={<Ionicons name="md-remove" size={24} color='#fff'/>} onPress={() => nextGuessHandler('lower')}/>
        <PrimaryButtont icon={<Ionicons name="md-add" size={24} color='#fff'/>} onPress={() => nextGuessHandler('greater')}/>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#ddb52f'
  }
})