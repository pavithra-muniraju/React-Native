import { useState } from 'react';
import {
  StyleSheet, View, FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    console.log(goalText);
    setCourseGoals(currentGoals => [...currentGoals,
    { text: goalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalStyle}>
        {/* <ScrollView>
          <Text>List Of Goals:</Text>
          {courseGoals.map((goal) => <Text key={goal} style={styles.goalItem}>{goal}</Text>)}
        </ScrollView> */}

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} onDeleteGoalHandler={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },

  buttonStyle: {
    color: 'red'
  },
  goalStyle: {
    flex: 4
  },
  textStyle: { backgroundColor: 'red', borderWidth: 2, padding: 16, color: 'white' }
});
