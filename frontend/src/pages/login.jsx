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
                state : logindata
            });
        } else {
            alert("Invalid username or password");
        }
}
    return(
        <div className="min-h-screen flex items-center justify-center bg-taupe-300 p-4">
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <label htmlFor="useremail" className="block text-gray-700 font-medium mb-1">Email </label>
        <input id="useremail" placeholder="Enter your email" required type="email" name="email" onChange={handlechange} className="w-full border border-blue-300 rounded-2xl p-2"/>
        <label htmlFor="Password" className="block text-gray-700 font-medium mb-1">Password </label>
        <input id="Password"placeholder="Enter Password" required type="password" name="password" onChange={handlechange} className="w-full border border-blue-300 rounded-2xl p-2"/>
        <button type="submit" className="text-xl text-black w-full mt-5  text-blue-500 rounded-md md-2 ">Submit</button>
    </form>
    </div>
    );
}
export default Login;