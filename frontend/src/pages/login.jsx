import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const handleSubmit = (e)=>{
    e.preventDefault(),
    console.log(formdata)
    }
    const navigate=useNavigate();
    navigate("/dashboard")
    state.formdata
    //function print(e){e.preventDefault(), console.log(formdata)}
    const[formdata,setFormdata]=useState({
        username:"",
        password:""
    }  )
    function handleChange(e){
        setFormdata({...formdata,
            [e.target.name]:e.target.value
    })
    }
    return (
    <form onSubmit={handleSubmit}> 
    <label>Email:</label>
    <input type="text" required placeholder='Enter your username'name="username" onChange={handleChange} />
    <label>Password:</label>
    <input type="password" required placeholder='Enter your Password' name="password" onChange={handleChange}/>
    <button type="submit">Submit</button>
    </form>

)
}
export default Login
