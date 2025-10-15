import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as RootNavigation from "../Navigation/Rootnavigtion"
function Footer() {
    return (
        <View style={style.footer}>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
                <Text style={style.button}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
                <Text style={style.button}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
               <Text style={style.button}>Catalog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RootNavigation.navigate('Home')}>
                <Text style={style.button}>News Details</Text>
            </TouchableOpacity>
        </View>
    )
}
 export default Footer;

 const style = StyleSheet.create({
    footer: {
        width : '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'fleex-start',
        color: 'white'
    },
    button: {
        // flex: 1,
        color: 'white',
        padding: 8
    }
 })