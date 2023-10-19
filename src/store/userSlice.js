import { configureStore, createSlice } from '@reduxjs/toolkit'

let user=createSlice({
    // name:'state이름~~',
    // initialState:'값'
    name:'user',
    initialState:{name:'kim',age:'20'},
    reducers:{
        changeName(state){
            /*{name:'park',age:'20'}*/state.name='park'
        },
         changeAge(state,action){
          state.age += action.payload;
       }
    }
});


export let {changeName,changeAge}=user.actions;

export default user;