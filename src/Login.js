import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import Header from './Header';

const Login = () => {
    const history=useHistory()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push('/list')
        }
    }, []);

    async function login(){
        let item={email,password}
        

        let result=await fetch("http://laravel.eshop.nasirkhan97.me/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }

        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        
        history.push("/list")
    }
    return (
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className="form-control"/><br/>
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="password" className="form-control"/><br/>
            
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
        </div>
    );
};

export default Login;