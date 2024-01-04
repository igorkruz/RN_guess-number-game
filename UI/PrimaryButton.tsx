import { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  title: string;
  onPress?: () => void;
}

export const PrimaryButtont: FC<Props> = ( { title, onPress } ) => {
  return(
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        onPress={onPress} 
        android_ripple={{color: '#ccc'}} 
        style={({pressed}) => pressed
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer
        }

      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: '#72065c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})