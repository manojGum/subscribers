import {useState,useEffect} from 'react'
const useTime=(intervalMiliSecond=1000)=>{
 const [currentTime, setCurrentTime]=useState('');
 useEffect(()=>{
      setInterval(()=>{
      setCurrentTime(new Date().toLocaleString())
      },intervalMiliSecond)
    },[intervalMiliSecond])
  return currentTime
}
export default useTime
