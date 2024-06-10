import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
interface Position {
    x: number;
    y: number;
  }
  
  interface InitialState {
    text: string;
    position: Position;
  }
  
  const initialState: InitialState = {
    text: "",  // Initialize text as an empty string
    position: { x: 0, y: 0 }  // Initialize position with x and y as numbers
  };
const tooltipTextSlice = createSlice({
    name:'tooltipText',
    initialState,
    reducers:{
        changeTooltipTextStateReducer:(_state,action:PayloadAction<InitialState>)=>{
         console.log(action.payload.text)
      return action.payload
        }
    }
})

export const {changeTooltipTextStateReducer} = tooltipTextSlice.actions
export default tooltipTextSlice.reducer