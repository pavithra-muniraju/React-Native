import { StyleSheet, Text } from "react-native";

function Instructions({children, style}) {
    return <Text style={[styles.textStyle, style]}> {children}</Text>
}

export default Instructions;

const styles = StyleSheet.create({
      textStyle: {
    color: 'white',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    // fontFamily: 'open-sans',
  }
});

