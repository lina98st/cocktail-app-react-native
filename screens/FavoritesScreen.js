import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { removeFavorite } from '../features/favorites/favoritesSlice';

const FavoritesScreen = () => {

const favorites = useSelector((state) => state.favorites);
const dispatch = useDispatch();
    
return (
<FlatList
    data={favorites}
    renderItem={({ item }) => (
        <View style={styles.container}>
            <Text>{item.strDrink}</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(removeFavorite(item))}>
<Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )}
    keyExtractor={(item) => item.idDrink}
/>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f1a14',
        padding: 10,
    },
    button: {
        backgroundColor: '#1f5c3f',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        color: '#eaf5ef',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default FavoritesScreen;