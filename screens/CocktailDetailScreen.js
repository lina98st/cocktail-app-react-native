import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';


const CocktailDetailScreen = ({ route, navigation }) => {
const { cocktail } = route.params;
const dispatch = useDispatch();

const ingredients = [];
for (let i = 1; i <= 15; i++) {
    if (cocktail?.[`strIngredient${i}`]) {
        ingredients.push(cocktail[`strIngredient${i}`]);
    }
}

return (
    <ScrollView>
    <View style={styles.container}>
        <Text>{cocktail.strDrink}</Text>
        <Image source={{ uri: cocktail.strDrinkThumb }} />
        <Text>{cocktail.strCategory}</Text>
      {ingredients.map((ingredient) => (
    <Text key={ingredient}>{ingredient}</Text>
))}
        <Text>{cocktail.strInstructions}</Text>
<TouchableOpacity style={styles.button} onPress={() => dispatch(addFavorite(cocktail))}>
    <Text>Add to Favorites</Text>
</TouchableOpacity>
    </View>
    </ScrollView>
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

export default CocktailDetailScreen;