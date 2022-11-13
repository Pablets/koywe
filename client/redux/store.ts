import { configureStore } from '@reduxjs/toolkit'
import { coingecko } from 'services/coingecko'
import { pokemonApi } from 'services/pokemonapi'
import counterSlice from './slices/counterSlice'
import filtersSlice from './slices/filterSlice'
// ...

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        filters: filtersSlice,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [coingecko.reducerPath]: coingecko.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pokemonApi.middleware, coingecko.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
