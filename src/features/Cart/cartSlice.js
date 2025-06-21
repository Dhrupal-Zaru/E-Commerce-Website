import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cart: [],
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state, action){

            const existing = state.cart.find((item)=>item.id === action.payload.id);
            if(existing){
                existing.qty++;
                existing.totPrice = existing.price * existing.qty;
            }
            else{
                state.cart.push(action.payload);
            }
        },
        deleteItem(state, action){
            state.cart = state.cart.filter((item)=> item.id !== action.payload);
        },
        clearCart(state){
            state.cart = [];
        },
        incQty(state, action){
            const item = state.cart.find((item) => item.id === action.payload);
            item.qty++;
            item.totPrice = item.qty * item.price;
        },
        decQty(state, action){
            const item = state.cart.find((item) => item.id === action.payload);
            item.qty--;
            item.totPrice = item.qty * item.price;

            if(item.qty === 0) cartSlice.caseReducers.deleteItem(state, action);
        }
    }
})

export const {addItem, deleteItem, clearCart, incQty, decQty} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart=(state)=> state.cart.cart ;
export const getTotPrice=(state)=> state.cart.cart.reduce((cur, item)=> cur + item.totPrice,0) ;
export const getTotQty=(state)=> state.cart.cart.reduce((cur, item)=> cur + item.qty, 0) ;
