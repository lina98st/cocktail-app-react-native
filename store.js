import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features/favorites/favoritesSlice';
import { cocktailsReducer } from './features/cocktails/cocktailsSlice';

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        cocktails: cocktailsReducer,
    },
});