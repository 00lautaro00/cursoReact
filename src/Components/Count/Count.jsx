import { useDispatch, useSelector } from "react-redux"
import { divide, increment, multiply, reduce } from "../Redux/CounterSlices/counterSlices"
import { useState } from "react";
import { pokemonFetch } from "../helpers/pokemonAxios";
import { PokemonSprite } from "../PokemonSprite/PokemonSprite";


export const Count = () => {
    const [pokemon, SetPokemon] = useState("")
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const handleClick =  (e) => {
        e.preventDefault()
        dispatch(pokemonFetch(e,pokemon))
        SetPokemon("")
    }
    return (<>
    <button onClick={()=> dispatch(multiply())}>x2</button>
    <button onClick={() => dispatch(increment())}>+1</button>
    <h1>{state.Counter.count}</h1>
    <button onClick={() => dispatch(reduce())}>-1</button>
    <button onClick={() => dispatch(divide())}>%2</button>
    <div>
        <form action="" onSubmit={(e) =>handleClick(e)}>
            <input onChange={(e) => SetPokemon(e.target.value)} type="text" value={pokemon}/>
        <button >Search Pokemon</button>

        </form>
    </div>
   <div>
   {
        state.pokemon.isLoading ? "Cargando" : 
        state.pokemon.data ? 
        <PokemonSprite data = {state.pokemon.data} />
        : "Error"
    }
   </div>

    </>)
}