import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./CounterSlices/counterSlices";
import pokemonSlices from "./PokemonSlices/pokemonSlices";

export const store = configureStore({
    reducer : {
        pokemon: pokemonSlices,
        Counter: counterSlice
    }
})