import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart', //naem to the slice
    initialState: {
        //items: [{id:1,name:'pizza'},{id:2,name:'burger'}]
        items: []
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