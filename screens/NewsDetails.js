import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NewsData } from "../data/dummy-data-expo";
import { Button } from "react-native";

function NewsDeatils({route, navigation}) {

    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const url = route.params.url;

    const selectedPost = allPostData.find((post) => post.url === url);
    useEffect(() => {
        setAllPostData(NewsData.articles);
        finishLoading(false);
    }, []);

    return(
        <View styles={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttontext}>Go back</Text>
        </TouchableOpacity>
        {dataLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView>
            <Text style={styles.title}>{selectedPost.title}</Text>
            <Image
              style={styles.storyimage}
              source={require('../assets/images/success.png')}
            />
            <Text style={styles.blurb}>{selectedPost.description}</Text>
            <Text style={styles.content}>{selectedPost.content}</Text>
          </ScrollView>
        )}
      </View>
        
    )
}   

export default NewsDeatils;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
    },
    button: {
      padding: 20,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    buttontext: {
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    storyimage: {
      height: 300,
      width: "100%",
    },
    title: {
      fontFamily: "Roboto",
      fontWeight: "bold",
      fontSize: 20,
      padding: 20
    },
    blurb: {
      fontFamily: "Roboto",
      fontStyle: "italic",
      fontSize: 14,
      padding: 20
    },
    content: {
      flex: 1,
      fontFamily: 'Roboto',
      fontSize: 16,
      paddingTop: 30,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20,
    },
  });

