import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CocktailCard = ({ cocktail, navigation }) => {
return (
    <View style={styles.container}>
    <TouchableOpacity>
<Image style={styles.image} source={{ uri: cocktail.strDrinkThumb }} />
<Text style={styles.buttonText}>{cocktail.strDrink}</Text>
</TouchableOpacity> 
<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CocktailDetail', { cocktail })}>
<Text style={styles.buttonText}>View Details</Text>
</TouchableOpacity>
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
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    }
});

export default CocktailCard;