import {createSlice } from "@reduxjs/toolkit";
// import { decrement, reset } from "../../../../redux-counter-example/src/redux/action";


const initialState = {
    value:0,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value +=1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action) {
            state.value += action.payload;

        },
         decrementByAmount(state, action) {
            state.value -= action.payload;

        },

        reset(state) {
            state.value = 0;
        },
    },
});

export const {increment, decrement, incrementByAmount,decrementByAmount, reset} =
 counterSlice.actions;
export default counterSlice.reducer;
