import { useState } from "react";

const useTime=()=>{
    const [currentTime, setCurrentTime]=useState('');
    const interval=setInterval(()=>{setCurrentTime(new Date().toLocaleString())},1000)
return currentTime;
}


export default useTime