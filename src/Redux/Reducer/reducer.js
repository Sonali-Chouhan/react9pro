import { get_api, Get_data,delete_Api } from "../Actiontype";
const initialState={
    Record:[],
    Data:[]
}
export const reducer=function(state=initialState,action){
    switch(action.type){
        case Get_data:
          var item=state.Record
            item.push(action.payload)
     
            return{
                ...state,
                Record:item
            };
        case get_api:
            
            return{
                ...state,
                Data:action.payload
            };
        case delete_Api:
             var cup=state.Data
             cup.splice(action.payload.id,1);
             return { 
                ...state,
                Data: [...cup] 
              };
           
            default: return state
    }
  
}
export default reducer;