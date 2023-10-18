import { configureStore, createSlice } from '@reduxjs/toolkit'


let user=createSlice({
    // name:'state이름~~',
    // initialState:'값'
    name:'user',
    initialState:'kim',
    reducers:{
        cahngeName(state){
            return 'john' + state
        }
    }


})  //useState 역할

export let {changeName}=user.actions


let cart=createSlice({
    name:'cart',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})


export default configureStore({
  reducer: {
    user : user.reducer,
    cart:cart.reducer
    
  }
}) 