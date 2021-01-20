import React,{useState,useContext} from 'react';
import {Context} from './GlobalState';

export const AddList= () =>{
    const [p1,setp1]=useState("");

    const {EddList}=useContext(Context);

    const onSubmit = (e) => {
        e.preventDefault();
        const infoo ={
            id:new Date().getTime(),
            p1
        
    }
EddList(infoo)
setp1("")
}
return (
    <div>
        <h2>Simple Todo-App</h2>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter  Todo Task.." value={p1} onChange={(e)=>setp1(e.target.value)} required="required"></input>
            <span></span><button>Add Todo</button>
        </form>
    </div>
)
}