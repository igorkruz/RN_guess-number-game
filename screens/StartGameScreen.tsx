import { TextInput, View, StyleSheet, Text, TextInputChangeEventData, NativeSyntheticEvent, Alert} from "react-native"
import { PrimaryButtont } from "../UI/PrimaryButton"
import { FC, useState } from "react"

interface Props {
  onPickNumber: (pickedNumber: number) => void 
}

export const StartGameScreen:FC<Props> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>('')

  const numberInputHandler = (enteredText: string) => {
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

    onPickNumber(chosenNumber)
  }

  return (
    <View style={styles.container}>
       <View style={styles.inputContainer} >
        <View style={{padding: 16}}>
            <Text style={{fontSize:24, textAlign: 'center', color: '#fff'}}>
              Please enter your number
            </Text> 
          </View>

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    alignItems: 'center',
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
    marginVertical: 8,
    marginBottom: 36
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }
})