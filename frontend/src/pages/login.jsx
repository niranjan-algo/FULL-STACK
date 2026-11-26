import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    //const[email,setEmail]=useState("")
    //const[pass,setPass]=useState("")
    const[formdata,setFormdata]=useState({user:"",pass:""})

    const print = (e)=>{
        e.preventDefault();
        console.log("Login Page",formdata)
        alert("Login Succesfull")
        navigate("/dashboard",{state:formdata})
    };

function handlechange(e){
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
}

    return( 
    <>
{/*
    <div>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button onClick={()=>console.log(email,pass)}>Submit</button>
    </div>


    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter email" required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />

        <button type="submit">Submit</button>
    </form>
    */}

    <form onSubmit={print}>
        <label>Email </label>
        <input placeholder="Enter username" required type="text" name="user" onChange={handlechange} />

        <label>Password </label>
        <input placeholder="Enter Password" required type="password" name="pass" onChange={handlechange} />

        <button type="submit">Submit</button>
    </form>

    </>
    );
}
export default Login;