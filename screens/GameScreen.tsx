import { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { PrimaryButtont } from "../UI/PrimaryButton";
import { generateRandomNumber } from "../utils/functionsHelpers";

interface Props {
  userNumber: number | null;
  onGameOver: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;


export const GameScreen:FC<Props> = ({ userNumber, onGameOver }) => {
  if (!userNumber) {
    return;
  }

  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (dirrection: 'lower' | 'greater') => {
    if ((dirrection === 'lower' && currentGuess < userNumber) 
      || (dirrection === 'greater' && currentGuess > userNumber)) {
      Alert.alert(
        'Dont lie!', 
        'You know that this is wrong...', 
        [{text: 'Sorry', style: 'cancel'}]
      );
      return;
    }

    if (dirrection === 'lower') {
      maxBoundary = currentGuess;
    }

    if (dirrection === 'greater') {
      minBoundary = currentGuess + 1;
    }

    const newRnadomNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRnadomNumber);
  }

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [onGameOver, userNumber, currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>
        Opponents Guess
      </Text>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {currentGuess}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonContent}>
          <PrimaryButtont 
            icon={
              <Ionicons 
                name="md-remove" 
                size={24} 
                color='#fff'
              />
            } 
            onPress={() => nextGuessHandler('lower')}
          />
        </View>

        <View style={styles.buttonContent}>
          <PrimaryButtont 
            icon={
              <Ionicons 
                name="md-add" 
                size={24} 
                color='#fff'
              />
            } 
            onPress={() => nextGuessHandler('greater')}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    gap:24,
    padding: 12
  },
  titleContainer: {
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#ddb52f',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContent: {
    flex: 1
  }
})