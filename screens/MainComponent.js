import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FavoritesScreen from './FavoritesScreen';
import SearchScreen from './SearchScreen';
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

const SearchNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Search' screenOptions={screenOptions}>
            <Stack.Screen name='Search' component={SearchScreen} options={{ title: 'Search' }} />
            <Stack.Screen name='CocktailDetail' component={CocktailDetailScreen}
                options={({ route }) => ({ title: route.params.cocktail.strDrink })} />
        </Stack.Navigator>
    );
};

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
            console.log('fetching initial cocktails');
        dispatch(fetchInitialCocktails());
    }, [dispatch]);

    return (
        <View style={{ flex: 1 }}>
         <ButtomTabNav.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#0f1a14' }, tabBarActiveTintColor: '#eaf5ef', tabBarInactiveTintColor: '#a7c7b8' }}>
                <ButtomTabNav.Screen name='HomeNav' component={HomeNavigator} options={{ title: 'Home' }} />
                <ButtomTabNav.Screen name='FavoritesNav' component={FavoritesNavigator} options={{ title: 'Favorites' }} />
                                <ButtomTabNav.Screen name='SearchNav' component={SearchNavigator} options={{ title: 'Search' }} />
            </ButtomTabNav.Navigator>
        </View>
    );
};

export default Main;