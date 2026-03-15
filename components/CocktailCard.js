import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CocktailCard = ({ cocktail, navigation }) => {
return (
    <View>
    <TouchableOpacity>
<Image source={{ uri: cocktail.strDrinkThumb }} />
<Text>{cocktail.strDrink}</Text>
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CocktailDetail', { cocktail })}>
    <Text>View Details</Text>
</TouchableOpacity>
</View>
)
}

export default CocktailCard;