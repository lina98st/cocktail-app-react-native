import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import CocktailDetailScreen from './CocktailDetailScreen';
import { fetchInitialCocktails } from '../features/cocktails/cocktailsSlice';

const ButtomTabNav = createBottomTabNavigator();

const screenOptions = {
    headerStyle: { backgroundColor: '#0f1a14' },
    headerTintColor: '#eaf5ef',
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Cocktails' }} />
            <Stack.Screen name='CocktailDetail' component={CocktailDetailScreen}
                options={({ route }) => ({ title: route.params.cocktail.strDrink })} />
        </Stack.Navigator>
    );
};

const FavoritesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Favorites' screenOptions={screenOptions}>
            <Stack.Screen name='Favorites' component={FavoritesScreen} options={{ title: 'Favorites' }} />
        </Stack.Navigator>
    );
};

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInitialCocktails());
    }, [dispatch]);

    return (
        <View style={{ flex: 1 }}>
            <ButtomTabNav.Navigator>
                <ButtomTabNav.Screen name='HomeNav' component={HomeNavigator} options={{ title: 'Home' }} />
                <ButtomTabNav.Screen name='FavoritesNav' component={FavoritesNavigator} options={{ title: 'Favorites' }} />
            </ButtomTabNav.Navigator>
        </View>
    );
};

export default Main;