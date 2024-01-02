import { TextInput, View, StyleSheet } from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton"

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer} >
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize="none" 
        autoCorrect={false} 
      />
      <PrimaryButtont title={'Reset'}/>        
      <PrimaryButtont title={'Confirm'}/>        
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ddb52f',
    borderBottomWidth: 2,
    borderBottomColor: '#ddb52f',
    marginVertical: 8
  }
})