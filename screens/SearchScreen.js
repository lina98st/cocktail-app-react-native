import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktail } from '../features/cocktails/cocktailsSlice';
import CocktailCard from '../components/CocktailCard';
import { useState } from 'react';

const SearchScreen = ({ navigation }) => {

const dispatch = useDispatch();
const [searchTerm, setSearchTerm] = useState('');
const cocktails = useSelector((state) => state.cocktails.cocktailsArray);

return (
<View style={styles.container}>
    <TextInput
     value={searchTerm}
     onChangeText={(text) => setSearchTerm(text)}
     placeholder='Search field'
    >

    </TextInput>
    <TouchableOpacity style={styles.button}
   onPress={() => dispatch(fetchCocktail(searchTerm))}
    >
     <Text style={styles.buttonText}>
    search field 
     </Text>
    </TouchableOpacity>
    <FlatList 
        style={{ flex: 1 }}
    data={cocktails}
    renderItem={({ item }) => <CocktailCard cocktail={item} navigation={navigation} />}
keyExtractor={(item, index) => index.toString()}
    /> 
</View>
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
    alignSelf: 'center',
    paddingHorizontal: 30,
},
    buttonText: {
        color: '#eaf5ef',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


export default SearchScreen;

