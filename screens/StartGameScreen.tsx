import { TextInput, View, StyleSheet, TextInputChangeEventData, NativeSyntheticEvent, Alert} from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton"
import { useState } from "react"

export const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState<any>('')
  const numberInputHandler = (enteredText: any) => {
    console.log(enteredNumber)
    setEnteredNumber(enteredText);
  }

  const resetInputHnadler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number', 
        'You should provide the value between 0 an 99', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHnadler}])
      return;
    }
  }

  return (
    <View style={styles.inputContainer} >
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType="number-pad" 
        autoCapitalize="none" 
        autoCorrect={false}
        value={enteredNumber} 
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtont 
            title={'Reset'}
            onPress={resetInputHnadler}
          />        
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButtont 
            title={'Confirm'}
            onPress={confirmInputHandler}
          /> 
        </View>
      </View>       
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
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
  },
  buttonsContainer: {
    flexDirection: 'row',
    // width: '100%'
  },
  buttonContainer: {
    flex: 1
  }
})