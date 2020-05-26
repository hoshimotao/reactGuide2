import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '../components/Card.js';

const StartGameScreen=props=>{
  return(
        <View style={styles.screen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput placeholder="Enter a number" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" onPress={() => {}} /></View>
          <View style={styles.button}><Button title="Confirm" onPress={() => {}} /></View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },

  button: {
    width: 100,
  },
});




export default StartGameScreen;