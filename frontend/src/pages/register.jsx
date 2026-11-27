import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    })
    
  function onSubmit1(data) {
    console.log("Registerdata:", data);
    alert("Registration successful");
    navigate("/login", {
      state: { registerdata: data },
    });
  }
return (
        <div className="min-h-screen flex items-center justify-center  bg-slate-100 p-6">
        <form onSubmit={handleSubmit(onSubmit1)} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">Register</h1>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Name </label>
            <input id="username"placeholder="Enter your name" type="text" {...register("name")} className="w-full border border-blue-300 rounded-2xl p-2 " />
            <p>{errors.name?.message}</p>
            <label htmlFor="useremail" className="block text-gray-700 font-medium mb-1">Email </label>
            <input  id="useremail" placeholder="Enter your email" type="email" {...register("email")} className="w-full border border-blue-300 rounded-2xl p-2"/>
            <p>{errors.email?.message}</p>
            <label htmlFor="userpass"className="block text-gray-700 font-medium mb-1" >Password </label>
            <input id="userpass" placeholder="Enter the Password"  type="password" {...register("password")} className="w-full border border-blue-300 rounded-2xl p-2" />
            <p>{errors.password?.message}</p>
            <label htmlFor="userage"className="block text-gray-700 font-medium mb-1">Age </label>
            <input id="userage" placeholder="Enter your age"  type="number" {...register("age")} className="w-full border border-blue-300 rounded-2xl p-2" />
            <p>{errors.age?.message}</p>
            <button type="submit" className="text-2xl text-black w-full mt-5 border-gray-300 bg-green-500 rounded-md md-2 ">Submit</button>
        </form>
        </div>
    );
}
export default Register;