import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    isLoading: false,
    error: false,
    data:{count:0}
}



export const pokemonSlices = createSlice({
    name: "pokemon",
    initialState,
    reducers:{
        isFetching : 
            (state) => {
                return{
                    ...state,
                    isLoading: true,
                    error: false,
                    data: null
                }
            },
        success: (state, action) => {
            return{
                ...state,
                isLoading: false,
                data: action.payload
            }
        },
        isError: (state) => {
            return {
                ...state,
                error: "pokemon no encontrado",
                isLoading: false,
                data: null
            }
        }
        
    }
});
export const {isFetching, success, isError} = pokemonSlices.actions;
export default pokemonSlices.reducer