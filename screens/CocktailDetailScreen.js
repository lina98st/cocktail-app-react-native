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
<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollView}>
    <View style={styles.container}>
        <Text style={styles.title}>{cocktail.strDrink}</Text>
<Image source={{ uri: cocktail.strDrinkThumb }} style={{ width: '100%', height: 250, borderRadius: 12 }} />
        <Text style={styles.buttonText}>{cocktail.strCategory}</Text>
      {ingredients.map((ingredient) => (
    <Text style={styles.buttonText} key={ingredient}>{ingredient}</Text>
))}
        <Text style={styles.buttonText}>{cocktail.strInstructions}</Text>
<TouchableOpacity style={styles.button} onPress={() => dispatch(addFavorite(cocktail))}>
    <Text style={styles.buttonText}>Add to Favorites</Text>
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
    title: {
    color: '#eaf5ef',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
},
scrollView: {
    backgroundColor: '#0f1a14',
    flexGrow: 1,
},
});

export default CocktailDetailScreen;