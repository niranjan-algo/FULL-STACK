import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const[count,setCount]=useState(0);
    //function displaydata(){
       // setUserdata(location.state);
        //console.log(userdata)
        useEffect(()=>{
            setUserdata(location.state);
             },)
    
    return ( 
        <>
            <button onClick={()=>setCount(count + 1)}>button</button>
        </>
     );
}

export default Dashboard;