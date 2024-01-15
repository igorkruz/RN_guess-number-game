import { FC } from "react"
import { View, Text } from "react-native"

interface Props {
  onGameOver: () => void
}

export const GameOverScreen:FC<Props> = ({ onGameOver }) => {
  return (
    <View>
      <Text>
        Game over
      </Text>
    </View>
  )
}