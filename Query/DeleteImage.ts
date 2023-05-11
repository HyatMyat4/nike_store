import {  ref, deleteObject } from "firebase/storage";
import { storage } from '../FirebaseConfig'
import toast from "react-hot-toast";


export const Delete_Img = (URL : string) => {
    const desertRef = ref(storage, URL);
    deleteObject(desertRef).then(() => {
      toast.success(`Delete Image Success`)       
      }).catch((error) => {
        console.log(error)
      });
}