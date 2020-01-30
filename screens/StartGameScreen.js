import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = props => {
  return (

    <View style={styles.screen}>
      <Text style={styles.title}> Start New Game </Text>


{/* User Input  */}
      <View style={styles.inputContainer}>
        <Text> Select a number </Text>
        <TextInput />


{/* Buttons are next to each other */}
        <View style={styles.buttonContainer}> 
          <Button title='Reset' onPress={() => {}}/>
          <Button title='Confirm' onPress={() => {}}/>
        </View>

      </View>


    </View>
  )

}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    
  },

  inputContainer: {

  },

  buttonContainer: {

  },

  title: {

  }

})

export default StartGameScreen;



