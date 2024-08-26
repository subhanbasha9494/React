import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart', //naem to the slice
    initialState: {
        items: ['pizza','burger']
    },
    reducers: {
        addItem: (state, action) => {
            //mutating(modifying) the state here
           state.items.push(action.payload);
        },
        removeItem:(state,action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        }
    }
});


//export actions and reducers
export const { addItem, removeItem, clearCart  } = cartSlice.actions;
export default cartSlice.reducer;