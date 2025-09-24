import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return (
    <Text style={styles.title}>{children}</Text>
  );
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        marginBottom: 24,
    }
});