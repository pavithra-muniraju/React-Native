import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as RootNavigation from "../Navigation/Rootnavigtion"
function Footer() {
    return (
        <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => RootNavigation.navigate("Home")}
        >
          <Text  style={styles.button}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={() => RootNavigation.navigate("About")}
        >
          <Text style={styles.button}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={() =>
            RootNavigation.navigate("Quote", {
              model: "Footer",
              modelnumber: "NoMessage",
            })
          }
        >
          <Text style={styles.button}>Quote</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          onPress={() => RootNavigation.navigate("CatalogPage")}
        >
          <Text style={styles.button}>Catalog</Text>
        </TouchableOpacity>
      </View>
    )
}
export default Footer;

const styles = StyleSheet.create({
    footer: {
        width: '100%',
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