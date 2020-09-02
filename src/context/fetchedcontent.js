import React , {useState} from 'react';

export const FetchedContext=React.createContext({
    
})

export default props=>{
   const[fetched,setFetched]=useState(
       {
           id:1
       }
   );
    return(
<FetchedContext.Provider value={{fetchedCon:fetched}}>
    {props.children}
</FetchedContext.Provider>
    )
}