'use server'

import { createUser } from "../server/product/actions";

export async function submitForm(preState : any,formData : FormData) {
   const username = formData.get('username');
   const lname = formData.get('lname');

   return {message:username,
      lastname:lname}

}

interface UserData {
    username: string;
   lastname: string;

 }
 
export async function create(preState : UserData,formData : FormData) {
   const username = formData.get('username')?.toString();
   const lname = formData.get('lname')?.toString();
   // console.log("type username",typeof(username))
   const newData:UserData = {
      username:username||"no username data",
      lastname:lname||"no lastname data"
   }   

   const res = await createUser(newData)
   console.log("response",res.data)
   return {message:"dd",
      lastname:lname}

}

