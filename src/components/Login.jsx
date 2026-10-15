import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../utils/constants";


const Login = () => {
    const [emailId,setEmailId]=useState("meghana@gmail.com");
    const [password,setPassword]=useState("Meghana@123");
    const [error,setError]=useState("");
    const dispatch=useDispatch();
     const navigate=useNavigate();

    const handleLogin=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/login",{
                emailId,
                password,
            },
        {withCredentials:true}
        );
        console.log(res.data);
        dispatch(addUser(res.data));

        return navigate("/");
        }
        catch(err){
            setError(err?.response?.data || "Something went wrong");
            // console.log(err);
        }
    };
    


    return (
        <div className="flex justify-center my-10">
            <div className="card card-border bg-base-300 w-96 ">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Email</label>
                        <input 
                        type="email" 
                        value={emailId} 
                        id="email" 
                        className="input"
                        placeholder="Email"
                        onChange={(e)=>setEmailId(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Password</label>
                        <input 
                        type="password"
                        value={password} 
                        id="password" 
                        className="input" 
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)} />
                    </fieldset>
                    <p className="text-red-500">{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;