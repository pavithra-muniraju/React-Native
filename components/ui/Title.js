import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  // console.log(Platform.OS)
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
        // borderWidth: Platform.OS === 'android' ? 2 : '',
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        padding: 12,
        marginBottom: 10,
        maxWidth: '80%',
        width:300
    }
});