import {useCallback, useState} from 'react';
const useSendRequest = ()=>{
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState('');
    const sendRequest=useCallback(async(requestConfig,handleData)=>{
        try{
            setIsLoading(true)
            const response = await fetch(requestConfig.url?requestConfig.url:'',
                {method:requestConfig.method?requestConfig.method:'GET',
                 body:requestConfig.body?JSON.stringify(requestConfig.body):null,
                 headers:requestConfig.headers?requestConfig.header:''})
             const data = await response.json()
             handleData(data);
             setIsLoading(false);
            }
        catch(error){
              setError(error.message);
              setIsLoading(false)
             }
    },[])
    return {isLoading,error,sendRequest}
}
export default useSendRequest