import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:"",
    profile_pic:"",
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        update_user:(state,action) => {
           state.name=action.payload.name;
           state.profile_pic = action.payload.profile_pic;
        }
    }
})

export const {update_user} = userSlice.actions;
export default userSlice.reducer;