

import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

const info={basic:[]}
const Context = createContext(info);

const GlobalProvider=({children})=> {
    const[state,dispatch]=useReducer(AppReducer,info);
    

function Del(id) {
  dispatch({
      type:"Dele",
      payload:id
  })

}
function EddList (infoo) {
    dispatch({
        type:"Add",
        payload:infoo
    });
}
    return(
       <Context.Provider value={{basic:state.basic,EddList,Del}}>
    
         {children}
        </Context.Provider>
    )
}

export default GlobalProvider;
export {Context};

