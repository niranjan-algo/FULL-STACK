import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../components/api";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
    const[check,setCheck]=useState(1);
    const[count,setCount]=useState(0);
    //function displaydata(){
       // setUserdata(location.state);
        //console.log(userdata)
        useEffect(()=>{
            setUserdata(location.state);
            console.log(count);
             },)
        const checkendpoint = async ()=>{
            const response = await API.get("/api/get")
            console.log(response.data)
             }
    return (
        <>
            <button onClick={checkendpoint}>button</button>
        </>
     );
}

export default Dashboard;