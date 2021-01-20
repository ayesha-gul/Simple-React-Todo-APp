import React, { useContext } from 'react'
import {Context} from './GlobalState';

 
 
 
 const Practice = () => {
    const {basic} = useContext(Context)
    const {Del} = useContext(Context);
    //console.log(typeof basic);
    //console.log(basic);

    return(
        <>
           <ul>
               {basic.map(b =>(<li>
                   <span> </span> {b.p1} <button  onClick={()=>Del(b.id)} className="delete-btn">x</button></li>))}
           </ul>
        </>
    )
}
export default  Practice;
//const [state,dispatch] = useReducer(AppReducer,info);