import { Get_Data ,Get_api,Delete_Api} from "../Actiontype";
export const getData = (obj) => {
  return {
    type: Get_Data,
    obj,
  };
};
export const Get_Api =()=>{
    return{
        type:Get_api
    }
}
export const DeleteApi=(id)=>{
  return{
    type:Delete_Api,
    id
  }
}