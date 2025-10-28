import { Image, StyleSheet, Text, View } from "react-native";

function Header(props) {
    return <>
    <View style={styles.container}>
        <Image source={require('../assets/rn-expo/logo.png')} style={styles.image} />
        <Text style={styles.text}>{props.headerDisplay}</Text>
    </View>
    </>
}

export default Header;
const styles = StyleSheet.create({
image: {
    height: 50,
    width: 60,
    marginTop: 6
},
header: {
    width: '100%',
    height: 70,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
},
text: {
    fontSize: 20,
    color: 'white',
},
container: {
    // flex: 1
     alignItems: 'center',
    justifyContent: 'center',
    padding: 6
}
})