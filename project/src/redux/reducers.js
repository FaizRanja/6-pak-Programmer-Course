import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer({
    

    Coin: [] 

    
}, {

    firstCase:(state, action)=>{
state.Coin=action.payload
    }

});
