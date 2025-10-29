import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globoCatalog from "../DB/CatalogDb";

function CatalogDetail({route, navigation}) {
    const [catalogData, setCatalogData] = useState(globoCatalog);

    const {id} = route.params;
    const selectedCatalog = catalogData.find(item => item.modelNumber == id) ;

    return(
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Catalog')}>
                <Text style={styles.backBtn}> ----Go Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{selectedCatalog.model} - {selectedCatalog.modelNumber}</Text>
            <Image source={selectedCatalog.image} style={styles.image} />
            <Text style={styles.description}>{selectedCatalog.description}</Text>

            <TouchableOpacity onPress={()=> navigation.navigate('Quote', {
                model: selectedCatalog.model,
                modelNumber: selectedCatalog.modelNumber
            })}>
                <Text style={styles.backBtn}>Submit Quote</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CatalogDetail;

const styles = StyleSheet.create({
    backBtn: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
    },
    image: {
        height: 200,
        padding: 20,
        width: '100%'
    },
    description: {
        padding: 8,
        fontSize: 16,
        fontStyle: 'italic'
    }
})