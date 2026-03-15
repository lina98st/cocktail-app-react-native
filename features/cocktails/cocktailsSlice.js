import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

// User can look for cocktails
export const fetchCocktail = createAsyncThunk(
    'cocktails/fetchCocktails',
    async (searchTerm) => {
        const response = await fetch(`${baseUrl}search.php?s=${searchTerm}`);
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data.drinks;
    }
);

// Fetches 6 different cocktails
export const fetchInitialCocktails = createAsyncThunk(
    'cocktails/fetchInitialCocktails',
    async () => {
        const response = await fetch(`${baseUrl}filter.php?c=Cocktail`);
        const data = await response.json();
        const shuffled = data.drinks.sort(() => Math.random() - 0.5);
        const ids = shuffled.slice(0, 6).map(d => d.idDrink);
        const details = await Promise.all(
            ids.map(id => fetch(`${baseUrl}lookup.php?i=${id}`).then(r => r.json()))
        );
        return details.map(d => d.drinks[0]);
    }
);


// User can look for random cocktail
export const fetchRandomCocktail = createAsyncThunk(
    'cocktails/fetchRandomCocktail',
    async () => {
        const response = await fetch(`${baseUrl}filter.php?c=Cocktail`);
        const data = await response.json();
        const shuffled = data.drinks.sort(() => Math.random() - 0.5);
        const randomId = shuffled[0].idDrink;
        const detail = await fetch(`${baseUrl}lookup.php?i=${randomId}`).then(r => r.json());
        return detail.drinks[0];
    }
);

const cocktailSlice = createSlice({
    name: 'cocktails',
    initialState: {
        isLoading: true,
        errMess: null,
        cocktailsArray: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialCocktails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchInitialCocktails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.cocktailsArray = action.payload;
            })
            .addCase(fetchInitialCocktails.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error ? action.error.message : 'Fetch failed';
            })
            .addCase(fetchRandomCocktail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.cocktailsArray = [action.payload, ...state.cocktailsArray];
            })
            .addCase(fetchRandomCocktail.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error ? action.error.message : 'Fetch failed';
            })
            .addCase(fetchCocktail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCocktail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.cocktailsArray = action.payload;
            })
            .addCase(fetchCocktail.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error ? action.error.message : 'Fetch failed';
            });
    }
});

export const cocktailsReducer = cocktailSlice.reducer;