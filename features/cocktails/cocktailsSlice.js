import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';


//User can look for cocktails
export const fetchCocktail = createAsyncThunk(
    'cocktails/fetchCocktails',
async (searchTerm) => {
    const response = await fetch(`${baseUrl}search.php?s=${searchTerm}`)
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            )
                    }
const data = await response.json();
return data.drinks;
    }
)

//fetches 6 random cocktails
export const fetchInitialCocktails = createAsyncThunk(
    'cocktails/fetchInitialCocktails',
async () => {
    const promises = Array.from({ length: 6 }, () =>
        fetch(`${baseUrl}random.php`).then((res) => res.json())
    );
    const results = await Promise.all(promises);
    return results.map((result) => result.drinks[0]);
}
)

//User can look for random cocktail
export const fetchRandomCocktail = createAsyncThunk(
    'cocktails/fetchRandomCocktail',
    async () => {
        const response = await fetch(`${baseUrl}random.php`)
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            )
                    }
const data = await response.json();
return data.drinks[0];
    }
)


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
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
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
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
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
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const cocktailsReducer = cocktailsSlice.reducer;