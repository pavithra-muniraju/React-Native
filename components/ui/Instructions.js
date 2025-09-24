import { StyleSheet, Text } from "react-native";

function Instructions({children}) {
    return <Text style={styles.textStyle}> {children}</Text>
}

export default Instructions;

const styles = StyleSheet.create({
      textStyle: {
    color: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

