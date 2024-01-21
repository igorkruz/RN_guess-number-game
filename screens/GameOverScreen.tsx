import { FC } from "react"
import { View, Text, Pressable } from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton";

interface Props {
  handleRestartGame: () => void;
  userNumber: number | null
}

export const GameOverScreen:FC<Props> = ({ handleRestartGame, userNumber }) => {
  return (
    <View style={{flex :1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 24}}>
          Game over
        </Text>

        <Text style={{color: '#fff'}}>
          Guessed number was
        </Text>

        <View style={{backgroundColor: '#72065c', paddingHorizontal: 24, paddingVertical: 12, marginTop: 16, borderRadius: 16}}>
          <Text>
            {userNumber}
          </Text>
        </View>
      </View>

      <PrimaryButtont title="Reset" onPress={handleRestartGame}/>
    </View>
  )
}

