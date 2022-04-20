 import axios from "axios"
 import {put,call, takeEvery } from 'redux-saga/effects'
 import { getData } from "../Action/action";
import{ Get_Data,Get_data,get_api,Get_api,Delete_Api,delete_Api} from "../Actiontype"
 function* GetData (action){
     const object= yield call(getData,action.obj)
     yield put({
         type:Get_data,
         payload:object
     })
    
 }
 function* GetApi(){
     try{
        const record=yield call (axios.get,'https://jsonplaceholder.typicode.com/posts')
        yield put({ 
            type:get_api,
            payload:record
   
        })
        console.log("record",record)
    }
        catch(e){
            console.log(e.message)

        }
       
    }
    function* ApiDelete(action){
        const id=action.id
        console.log("www",id)
        try{
           const ids =yield call (axios.delete,(`https://jsonplaceholder.typicode.com/posts${id}`))
           
           yield put({
               type:delete_Api,
               payload:ids,
               
      
           })
            console.log("saga-id",ids)
       }
           catch(e){
               console.log(e.message)
   
           }
          
       }
       

    


 export default function* Data_send(){
    yield takeEvery(Get_Data,GetData)
    yield takeEvery (Get_api,GetApi)
    yield takeEvery(Delete_Api,ApiDelete)
 }
//  function* ApiDelete(action){
//     console.log("action.id",action.id)
//     try{
//        const id=yield call (action.id)
//        yield put({
//            type:delete_Api,
//            payload:id
  
//        })
//         console.log("saga-id",id)
//    }
//        catch(e){
//            console.log(e.message)

//        }
      
//    }
   
 