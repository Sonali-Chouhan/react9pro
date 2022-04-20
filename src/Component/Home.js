import React from "react";
import {useDispatch,useSelector} from "react-redux"
import { useForm } from 'react-hook-form'
import {getData,Get_Api} from  "../Redux/Action/action"
const Home=()=>{
    const dispatch=useDispatch()
    const Data=useSelector((state)=>state.reducer)
    const item=Data.Record
    console.log("kkk",item)
    console.log("selector",Data)
  const {register,handleSubmit}=useForm();
  const handleSave=(user)=>{
     
      dispatch(getData(user))

  }
  const show=()=>{
      dispatch(Get_Api())
  }
    return (
        <div>
            <form onSubmit={handleSubmit(handleSave)}>
                <input type="text" name="name" {...register("name")}/>
                <button type="submit" >save</button>
            </form>
            <button type="submit" onClick={show} >show</button>
            
        </div>
    )
}
export default Home;