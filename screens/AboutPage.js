import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
function AboutPage() {

    const aboutMsg = 'Stocks rallied with futures and the dollar weakened as optimism over a potential Federal Reserve interest-rate cut revived risk sentiment and outweighed US-China trade tensions.'
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Akl you have to know about Globomantics</Text>
            <ScrollView>
                <Image source={require("../assets/images/background.png")} style={styles.images} />
                <Text style={styles.abtMsg}>{aboutMsg}</Text>

                <Text style={styles.leaders}> About Our Leaders </Text>
                <Image source={require("../assets/images/success.png")} style={styles.images} />
                <Text style={styles.abtMsg}>{aboutMsg}</Text>
                <Text style={styles.admin}>Please contact your admin for msgs</Text>
            </ScrollView>


        </View>
    )
}

export default AboutPage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    images: {
        height: 300,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8
    },
    abtMsg: {
        padding: 8,
        fontWeight: '500',
        fontSize: 16
    },
    leaders: {
        padding: 8,
        fontWeight: '800',
        fontSize: 18
    },
    admin:{
        margin: 20,
        fontWeight: '500',
        fontSize: 16,
        padding: 30
    }

})