import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, TextInput, View, Button, Text,
  ScrollView
} from 'react-native';

export default function App() {

  const [goalText, setGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(goalText);
    setCourseGoals(currentGoals => [...currentGoals, goalText]);
    console.log(courseGoals);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal'
          onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalStyle}>
        <ScrollView>
          <Text>List Of Goals:</Text>
          {courseGoals.map((goal) => <Text key={goal} style={styles.goalItem}>{goal}</Text>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    marginRight: 8,
    padding: 8
  },

  buttonStyle: {
    color: 'red'
  },
  goalStyle: {
    flex: 4
  },
  goalItem: {
    padding: 8,
    borderRadius: 6,
    margin: 8,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  textStyle: { backgroundColor: 'red', borderWidth: 2, padding: 16, color: 'white' }
});
