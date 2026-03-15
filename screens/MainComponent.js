import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import CocktailDetailScreen from './CocktailDetailScreen';
import { fetchInitialCocktails } from '../features/cocktails/cocktailsSlice';


const ButtomTabNav = createBottomTabNavigator();

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Cocktails' }}
            />
            <Stack.Screen
                name='CocktailDetail'
                component={CocktailDetailScreen}
                options={({ route }) => ({
                    title: route.params.cocktail.strDrink
                })}
            />
        </Stack.Navigator>
    );
};

const FavoritesNavigator = () => {
        const Stack = createStackNavigator();


    return (
        <Stack.Navigator initialRouteName='Favorites'>
            <Stack.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{ title: 'Favorites' }}
            />
                    </Stack.Navigator>
    );
}


const Main = () => {
const dispatch = useDispatch();

useEffect(() => {
dispatch(fetchInitialCocktails());
}, [dispatch]);

return (
    <View style= {{ flex: 1 }}>
        <ButtomTabNav.Navigator>
              <ButtomTabNav.Screen name='HomeNav' component={HomeNavigator} />
                <ButtomTabNav.Screen name='FavoritesNav' component={FavoritesNavigator} />
        </ButtomTabNav.Navigator>
    </View>
)
}

export default Main;