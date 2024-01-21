import { FC } from "react"
import { View, Text, StyleSheet } from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton";

interface Props {
  handleRestartGame: () => void;
  userNumber: number | null;
}

export const GameOverScreen:FC<Props> = ({ handleRestartGame, userNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Game over
        </Text>

        <Text style={styles.subTitle}>
          Guessed number was
        </Text>

        <View style={styles.userNumber}>
          <Text>
            {userNumber}
          </Text>
        </View>
      </View>

      <PrimaryButtont title="Reset" onPress={handleRestartGame}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex :1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center'
  },
  title: {
    color: '#fff', 
    fontSize: 24
  },
  subTitle: {
    color: '#fff'
  },
  userNumber: {
    backgroundColor: '#72065c', 
    paddingHorizontal: 24, 
    paddingVertical: 12, 
    marginTop: 16, 
    borderRadius: 16
  }
})