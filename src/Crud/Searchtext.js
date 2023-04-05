import { useState, createContext } from "react";

const Searchcontext = createContext()

function SearchProvider({children}) {

const[keyword,setKeyword]=useState("")
// console.log(keyword);

    return ( 
<Searchcontext.Provider value={{keyword,setKeyword}} >

{children}


</Searchcontext.Provider>



     )
}

export  {Searchcontext,SearchProvider};