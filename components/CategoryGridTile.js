import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color }) {
  return (
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  );
}

export default CategoryGridTile;

