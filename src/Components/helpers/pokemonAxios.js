import axios from "axios";
import { isError, isFetching, success } from "../Redux/PokemonSlices/pokemonSlices";


export const pokemonFetch = (e, pokemon) => async (dispatch ) => {
    e.preventDefault();
    const pokemonSearch = pokemon.toLowerCase().trim();
    try{
        dispatch(isFetching);
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`);
        dispatch(success(data))
    }catch{
        dispatch(isError)
    }
}