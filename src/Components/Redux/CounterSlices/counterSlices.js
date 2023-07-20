import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    count:0
}
export const counterSlice = createSlice({
    name:"Counter",
    initialState: INITIAL_STATE,
    reducers:{
        increment: (state) => {
            return{
            ...state,
            count : state.count + 1
            }
        },
        reduce: (state) => {
            return{
                ...state,
                count : state.count - 1
            }
        },
        multiply : (state) => {
            return{
                ...state, 
                count: state.count * 2 
            }
        },
        divide: (state) => {
            return{
                ...state,
                count: state.count / 2
            }
        }
    }
  
});
export const {
    increment,
    reduce,
    multiply,
    divide
} = counterSlice.actions;
export default counterSlice.reducer