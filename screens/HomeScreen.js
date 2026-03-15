import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRandomCocktail } from '../features/cocktails/cocktailsSlice';
import CocktailCard from '../components/CocktailCard';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const cocktails = useSelector((state) => state.cocktails.cocktailsArray);

    return (
        <View>
            <FlatList
            data={cocktails}
            renderItem={({ item }) => <CocktailCard cocktail={item} />}
            keyExtractor={(item) => item.idDrink}
            >

            </FlatList>
             <TouchableOpacity style={styles.button} onPress ={() => dispatch(fetchRandomCocktail())}>
              <Text>Surprise Cocktail</Text>
      </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;