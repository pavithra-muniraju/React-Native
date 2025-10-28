import { useEffect } from "react";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { NewsData } from "../data/dummy-data-expo";
import ActivityLoader from "../components/ActivityLoader";

function HomePage({ navigation }) {
    const [dataLoading, finishLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);

    // useEffect(() => {
    //     fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=81cc1997ed2241dba4a4e6efb67ac36b')
    //     // fetch('https://newsapi.org/v2/everything?q=tech&apiKey=81cc1997ed2241dba4a4e6efb67ac36b')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setNewsData(json.articles);
    //     }).catch((error) => console.error(error));
    // }, [])
    useEffect(() => {
        setNewsData(NewsData.articles);
        finishLoading(false);
    }, []);

    // const onPressHandler = () => {
    //     navigation.navigate('NewsDetails')
    // }
    const storyItem = ({ item }) => {
        return <>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('NewsDetails' ,{url: item.url})}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image source={require('../assets/images/background.png')} style={styles.images} />
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        </>


    }
    return (
        <View style={styles.homePage}>
            <Text style={styles.welcome}>Welcome to News Application</Text>
            {dataLoading ? <ActivityLoader /> : (
                <FlatList data={newsData} renderItem={storyItem} keyExtractor={(item) => item.url}  contentContainerStyle={{ paddingBottom: 20 }}/>
            )}

        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    homePage: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8
    },
    title: {
        fontWeight: 'bold',
        margin: 2
    },
    images: {
        width: 'auto',
        height: 200,
    },
    description: {
        fontStyle: 'italic',
        fontSize: 14,
        margin: 2
    }
})