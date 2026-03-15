import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRandomCocktail } from '../features/cocktails/cocktailsSlice';
import CocktailCard from '../components/CocktailCard';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const cocktails = useSelector((state) => state.cocktails.cocktailsArray);

    return (
        <View style={styles.container}>
<FlatList
    style={{ flex: 1 }}
    data={cocktails}
    renderItem={({ item }) => <CocktailCard cocktail={item} navigation={navigation} />}
keyExtractor={(item, index) => index.toString()}
>

            </FlatList>
             <TouchableOpacity style={styles.button} onPress={() => {
    console.log('button pressed');
    dispatch(fetchRandomCocktail());
}}>
     <Text style={styles.buttonText}>Surprise Cocktail</Text>
      </TouchableOpacity>
        </View>
    );
};

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
    alignSelf: 'center',
    paddingHorizontal: 30,
},
    buttonText: {
        color: '#eaf5ef',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default HomeScreen;