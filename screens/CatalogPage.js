import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import globoCatalog from '../DB/CatalogDb'
function CatalogPage({ navigation }) {

    const catalogItem = (item) => {
        return (
            // <View>
            //     
            // </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('CatalogDetail', { id: item.item.modelNumber })} style={styles.container}>
                <View>
                    <View>
                    <Image source={item.item.image} style={styles.image} />
                    </View>
                    <View>
                    <Text style={styles.products}>{item.item.model} : </Text>
                    <Text style={styles.description}>{item.item.description}</Text>
                    </View>
                   

                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <View>
            <Text>Catalog Page</Text>
            <FlatList data={globoCatalog} renderItem={catalogItem} keyExtractor={(item) => item.modelNumber} />

        </View>
    )
}

export default CatalogPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        paddingBottom: 200
    },
    products: {
        padding: 8,
        fontSize: 20,
        fontWeight: 'bold',
        cursor: 'pointer',
        borderBlockColor: 'black',
        borderBottomWidth: 1
    },
    image: {
        height: 200,
        width: '100%',
        // marginLeft: 20,
    },
    description: {
        padding: 8,
        fontSize: 16,
        fontStyle: 'italic'
    }
})