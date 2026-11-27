import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const location=useLocation();
    const registerdata = location.state?.registerdata;   
 //const[email,setEmail]=useState("")
    //const[pass,setPass]=useState("")
    const [logindata, setLogindata] = useState({email: "",password: ""});
    function handlechange(e){
         setLogindata({...logindata,[e.target.name]:e.target.value})
}
    function handleSubmit(e){
        e.preventDefault();
     if (
            logindata.email === registerdata.email &&
            logindata.password === registerdata.password
        ) {
            alert("Login Successful");
            console.log(logindata);
            navigate("/dashboard", {
                state:logindata
            });
        } else {
            alert("Invalid username or password");
        }
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

        <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input placeholder="Enter your email" required type="email" name="email" onChange={handlechange} />
        <label>Password </label>
        <input placeholder="Enter Password" required type="password" name="password" onChange={handlechange} />
        <button type="submit">Submit</button>
    </form>
    </>

    );
}
export default Login;