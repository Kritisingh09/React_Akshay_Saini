
import { MENU_API } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData=async()=>{
        const result=await fetch(MENU_API+resId);
        const data=await result.json();
        setResInfo(data);
    }
    return resInfo;
}
export default useRestaurantMenu;